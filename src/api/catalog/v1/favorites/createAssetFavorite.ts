import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Create a favorite for an asset by the authenticated user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param assetId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function createAssetFavorite(client: NobloxClient, userId: number, assetId: number) {
  return await client.http<{}>(
    `https://catalog.roblox.com/v1/favorites/users/${userId}/assets/${assetId}/favorite`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
    }
  )
}
