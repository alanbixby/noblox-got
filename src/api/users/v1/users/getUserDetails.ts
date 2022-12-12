import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets detailed user information by id.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user id.
 * @return OK TODO:
 */
export async function getUserDetails(client: NobloxClient, userId: number) {
  return await client.http<UserResponseV2>(`https://users.roblox.com/v1/users/${userId}`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
