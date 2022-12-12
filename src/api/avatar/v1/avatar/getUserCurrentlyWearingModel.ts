import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of asset ids that the user is currently wearing
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user id.
 * @return OK TODO:
 */
export async function getUserCurrentlyWearingModel(client: NobloxClient, userId: number) {
  return await client.http<AssetIdListModel>(
    `https://avatar.roblox.com/v1/users/${userId}/currently-wearing`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
