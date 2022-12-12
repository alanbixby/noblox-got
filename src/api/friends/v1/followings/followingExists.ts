import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Returns whether or not the current user is following each userId in a list of userIds
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel The userIds potentially being followed
 * @return OK TODO:
 */
export async function followingExists(client: NobloxClient, requestModel: FollowingExistsRequestModel) {
  return await client.http<FollowingExistsResponseModel>(
    `https://friends.roblox.com/v1/user/following-exists`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        requestModel,
      },
    }
  )
}
