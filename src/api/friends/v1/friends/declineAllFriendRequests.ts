import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Decline all pending friend requests for the authenticated user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function declineAllFriendRequests(client: NobloxClient) {
  return await client.http<{}>(`https://friends.roblox.com/v1/user/friend-requests/decline-all`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
