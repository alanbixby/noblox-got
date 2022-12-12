import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🤖 Send a friend request to target user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param targetUserId The target user Id for friend request
 * @param friendshipRequestModel The source which the friend request originated from
 * @return OK TODO:
 */
export async function requestFriendship(
  client: NobloxClient,
  targetUserId: number,
  friendshipRequestModel: FriendshipRequestModel
) {
  return await client.http<CaptchaStatusResponseModel>(
    `https://friends.roblox.com/v1/users/${targetUserId}/request-friendship`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'CAPTCHA',
        isRatelimited: true,
      },
      json: {
        friendshipRequestModel,
      },
    }
  )
}
