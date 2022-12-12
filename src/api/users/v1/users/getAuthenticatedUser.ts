import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the minimal authenticated user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getAuthenticatedUser(client: NobloxClient) {
  return await client.http<SkinnyUserResponse>(`https://users.roblox.com/v1/users/authenticated`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
