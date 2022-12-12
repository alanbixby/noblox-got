import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get social network user information if the given social auth method is connected to current user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function providers(client: NobloxClient) {
  return await client.http<SocialProvidersResponse>(`https://auth.roblox.com/v1/social/connected-providers`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
