import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a user's status.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user id.
 * @return OK TODO:
 */
export async function getUserStatus(client: NobloxClient, userId: number) {
  return await client.http<UserStatusResponse>(`https://users.roblox.com/v1/users/${userId}/status`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
