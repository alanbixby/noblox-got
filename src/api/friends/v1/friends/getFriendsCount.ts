import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get the number of friends a user has
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getFriendsCount(client: NobloxClient) {
  return await client.http<FriendsCountResponse>(`https://friends.roblox.com/v1/my/friends/count`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
