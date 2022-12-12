import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets the favorite count for the given bundle Id.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param bundleId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getBundleFavoritesCount(client: NobloxClient, bundleId: number) {
  return await client.http<number>(`https://catalog.roblox.com/v1/favorites/bundles/${bundleId}/count`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
