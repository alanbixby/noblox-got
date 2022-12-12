import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Return the number of pending friend requests.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getPendingFriendRequestCount(client: NobloxClient) {
  return await client.http<PendingFriendRequestCountModel>(
    `https://friends.roblox.com/v1/user/friend-requests/count`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
