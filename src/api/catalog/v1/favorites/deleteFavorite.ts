import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Delete a favorite for an asset by the authenticated user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param assetId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function deleteFavorite(client: NobloxClient, userId: number, assetId: number) {
  return await client.http<{}>(
    `https://catalog.roblox.com/v1/favorites/users/${userId}/assets/${assetId}/favorite`,
    {
      method: 'DELETE',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
    }
  )
}
