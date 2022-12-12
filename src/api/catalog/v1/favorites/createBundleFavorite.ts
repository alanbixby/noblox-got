import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Create a favorite for the bundle by the authenticated user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param bundleId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function createBundleFavorite(client: NobloxClient, userId: number, bundleId: number) {
  return await client.http<{}>(
    `https://catalog.roblox.com/v1/favorites/users/${userId}/bundles/${bundleId}/favorite`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
    }
  )
}
