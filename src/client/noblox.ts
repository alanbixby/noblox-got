import { Got } from 'got'
import { CookieJar } from 'tough-cookie'
import { getFileList } from '../util/getFileList.js'
import { nobloxGot, NobloxGotCustomOptions } from './http.js'

export type RobloxCookie = `_|${string}|_${string}`

// TODO: figure out better way to load methods into class
const RobloxAPIMethods = getAPIMethods()

function getAPIMethods() {
  const files = getFileList('api')
}

export type NobloxClient = InstanceType<typeof _NobloxClient> & typeof RobloxAPIMethods

class _NobloxClient {
  cookie: CookieJar
  http: Got
  constructor(robloxCookie?: RobloxCookie, options?: NobloxGotCustomOptions) {
    this.cookie = new CookieJar()
    this.cookie.setCookieSync(`.ROBLOSECURITY=${robloxCookie}; domain=.roblox.com`, 'https://www.roblox.com')
    this.http = nobloxGot.extend({ cookieJar: this.cookie, ...options })
  }
}
