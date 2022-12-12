import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Unfriend a user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param targetUserId The target user id to unfriend
 * @return OK TODO:
 */
export async function unFriend(client: NobloxClient, targetUserId: number) {
  return await client.http<{}>(`https://friends.roblox.com/v1/users/${targetUserId}/unfriend`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
