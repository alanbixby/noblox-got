import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Thumbnails assets.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId The asset id.
 * @return OK TODO:
 */
export async function getAssetThumbnail3D(client: NobloxClient, assetId: number) {
  return await client.http<ThumbnailResponse>(`https://thumbnails.roblox.com/v1/assets-thumbnail-3d`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      assetId,
    },
  })
}
