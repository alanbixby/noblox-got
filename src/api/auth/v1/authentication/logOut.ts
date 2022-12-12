import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Destroys the current authentication session.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function logOut(client: NobloxClient) {
  return await client.http<{}>(`https://auth.roblox.com/v1/logout`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
