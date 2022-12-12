import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get the number of following a user has
 *
 * @param client the inherited http client and noblox wrapper class
 * @param targetUserId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getFollowersCount(client: NobloxClient, targetUserId: number) {
  return await client.http<FollowCountResponse>(
    `https://friends.roblox.com/v1/users/${targetUserId}/followers/count`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
