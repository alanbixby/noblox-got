import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Removes the given social authentication method from current Roblox user if it is connected.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param provider The social authentication provider, e.g. Facebook
 * @param request The request body for additional parameters that may be required for disconnect
 * @return Successfully disconnected the authentication provider, if it was connected
 */
export async function disconnect(
  client: NobloxClient,
  provider: string,
  request: SocialAuthenticationDisconnectRequest
) {
  return await client.http<{}>(`https://auth.roblox.com/v1/social/${provider}/disconnect`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
