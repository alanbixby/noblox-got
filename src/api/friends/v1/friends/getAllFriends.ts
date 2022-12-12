import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get list of all friends for the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user Id to get the friends for.
 * @return OK TODO:
 */
export async function getAllFriends(client: NobloxClient, userId: number) {
  return await client.http<UserResponse[]>(`https://friends.roblox.com/v1/users/${userId}/friends`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
