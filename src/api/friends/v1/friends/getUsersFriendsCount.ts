import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get the number of friends a user has
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getUsersFriendsCount(client: NobloxClient, userId: number) {
  return await client.http<FriendsCountResponse>(
    `https://friends.roblox.com/v1/users/${userId}/friends/count`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
