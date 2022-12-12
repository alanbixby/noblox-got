import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets the favorite count for the given asset Id.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getAssetFavoritesCount(client: NobloxClient, assetId: number) {
  return await client.http<number>(`https://catalog.roblox.com/v1/favorites/assets/${assetId}/count`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
