import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Decline a friend request.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requesterUserId The user Id of the requester
 * @return OK TODO:
 */
export async function declineFriendRequest(client: NobloxClient, requesterUserId: number) {
  return await client.http<{}>(
    `https://friends.roblox.com/v1/users/${requesterUserId}/decline-friend-request`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
