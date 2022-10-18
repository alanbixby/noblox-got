import 'dotenv/config'
import got, { OptionsInit } from 'got'

const nobloxGotSimple = got.extend({
  responseType: 'json',
  headers: {
    Cookie: `.ROBLOSECURITY=${process.env.ROBLOX_COOKIE as string}`,
    'User-Agent': 'noblox.js-got API wrapper',
  },
  retry: {
    limit: 0,
  },
})

export enum AuthenticationLevels {
  UNKNOWN = 'UNKNOWN', // Default; unset configuration
  PUBLIC = 'PUBLIC', // A .ROBLOSECURITY cookie is not required
  OPTIONAL = 'OPTIONAL', // A .ROBLOSECURITY cookie may be required in some use-cases; usually depending on privacy settings
  REQUIRED = 'REQUIRED', // A .ROBLOSECURITY cookie is required, no CSRF token is required
  PROTECTED = 'PROTECTED', // A .ROBLOSECURITY cookie is required, and the action requires a CSRF token
  CAPTCHA = 'CAPTCHA', // A .ROBLOSECURITY cookie is required, a CSRF token is required, and the user may need to pass a captcha
}

export type NobloxGotCustomOptions = OptionsInit &
  ({ context: { authenticationLevel: AuthenticationLevels } } | { authenticationLevel: AuthenticationLevels })

export const nobloxGot = nobloxGotSimple.extend({
  hooks: {
    init: [
      (raw: OptionsInit & { authenticationLevel?: AuthenticationLevels }, options) => {
        if ('authenticationLevel' in raw && typeof raw.authenticationLevel === 'string') {
          options.context.authenticationLevel = raw.authenticationLevel
          delete raw.authenticationLevel
        }
        if ((options.context.authenticationLevel as AuthenticationLevels) === AuthenticationLevels.UNKNOWN) {
          throw new Error(`Misconfigured nobloxGot instance; missing the endpoint's authentication level`)
        }
        if (
          ((options.context.authenticationLevel as AuthenticationLevels) === AuthenticationLevels.REQUIRED ||
            (options.context.authenticationLevel as AuthenticationLevels) === AuthenticationLevels.PROTECTED ||
            (options.context.authenticationLevel as AuthenticationLevels) === AuthenticationLevels.CAPTCHA) &&
          options.headers.Cookie === '.ROBLOSECURITY='
        ) {
          throw new Error(`Cookie is required but missing`)
        }
      },
    ],
    afterResponse: [
      (response, retryWithMergedOptions) => {
        // Handle CSRF Token Refreshing
        if (response.headers['x-csrf-token']) {
          const updatedOptions: OptionsInit = {
            headers: {
              'x-csrf-token': response.headers['x-csrf-token'],
            },
          }
          nobloxGot.defaults.options.merge(updatedOptions)
          return retryWithMergedOptions(updatedOptions)
        }
        return response
      },
    ],
    beforeError: [
      async (error) => {
        // console.log(error)
        if (process.env.DISABLE_NOBLOX_TROUBLESHOOTING) {
          return error
        }
        // Handle Bad Cookie
        if (error.response?.statusCode === 401) {
          try {
            await nobloxGotSimple.get('https://users.roblox.com/v1/users/authenticated')
            error.name = '401_INSUFFICIENT_PERMISSIONS'
            error.message = `The credentials passed are valid, but are unauthorized to complete the operation. | ${error.message}`
            return error
          } catch (err) {
            if (
              process.env.REPL_ID || // Replit
              process.env.API_SERVER_EXTERNAL === 'https://api.glitch.com' || // Glitch
              process.env.DETA_PATH || // Deta
              process.env.DYNO || // Heroku
              process.env.FLY_ALLOC_ID || //  Fly.io
              process.env.RAILWAY_ENVIRONMENT // Railway
            ) {
              error.name = 'INCOMPATIBLE_HOST_ENVIRONMENT'
              error.message =
                'Detected a managed, dynamic IP host; this environment cannot handle authenticated web requests and your cookie was invalidated. See TODO:'
              return error
            }
            error.name = 'INVALID_OR_EXPIRED_COOKIE'
            error.message = 'TODO: guide linking to cookie expiration guide'
            return error
          }
        }
        // Handle Invalid CSRF Token
        else if (
          error.response?.statusCode === 403 &&
          error.response?.statusMessage?.includes('Token Validation Failed')
        ) {
          error.name = `INVALID_CSRF_TOKEN`
          error.message = `This shouldn't happen; make an issue on https://github.com/noblox/noblox.js-got TODO: | csrf='${error.request?.options.headers['x-csrf-token']}' | ${error.message}`
          return error
        }
        // Handle Insufficient Permissions
        else if (error.response?.statusCode === 403) {
          error.name = '403_INSUFFICIENT_PERMISSIONS'
          error.message = `The credentials passed are valid, but are unauthorized to complete the operation. | ${error.message}`
          return error
        }
        return error
      },
    ],
  },
  retry: {
    limit: 3,
  },
  mutableDefaults: true,
})
