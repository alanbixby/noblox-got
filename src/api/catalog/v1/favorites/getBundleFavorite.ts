import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the favorite model for the bundle and user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param bundleId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getBundleFavorite(client: NobloxClient, userId: number, bundleId: number) {
  return await client.http<BundleFavoriteModel>(
    `https://catalog.roblox.com/v1/favorites/users/${userId}/bundles/${bundleId}/favorite`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
