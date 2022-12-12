import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get list of all online friends for the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user Id to get the friends for.
 * @return OK TODO:
 */
export async function getAllOnlineFriends(client: NobloxClient, userId: number) {
  return await client.http<UserPresenceResponse[]>(
    `https://friends.roblox.com/v1/users/${userId}/friends/online`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
