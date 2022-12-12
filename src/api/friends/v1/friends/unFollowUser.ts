import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🤖 Deletes the following between a user and user with {targetUserId}
 *
 * @param client the inherited http client and noblox wrapper class
 * @param targetUserId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function unFollowUser(client: NobloxClient, targetUserId: number) {
  return await client.http<{}>(`https://friends.roblox.com/v1/users/${targetUserId}/unfollow`, {
    method: 'POST',
    context: {
      authenticationLevel: 'CAPTCHA',
      isRatelimited: true,
    },
  })
}
