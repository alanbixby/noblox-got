import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the favorite model for the asset and user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param assetId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getAssetFavorite(client: NobloxClient, userId: number, assetId: number) {
  return await client.http<AssetFavoriteModel>(
    `https://catalog.roblox.com/v1/favorites/users/${userId}/assets/${assetId}/favorite`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
