import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ TODO: DESCRIPTION HERE
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetRequestItems TODO: DESCRIPTION HERE
 * @param robloxPlaceId TODO: DESCRIPTION HERE
 * @param accept TODO: DESCRIPTION HERE
 * @param robloxBrowserAssetRequest TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function assetBatch(
  client: NobloxClient,
  assetRequestItems: BatchAssetRequestItem,
  robloxPlaceId?: number,
  accept?: string,
  robloxBrowserAssetRequest?: string
) {
  return await client.http<IAssetResponseItem[]>(`https://assetdelivery.roblox.com/v1/assets/batch`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    json: {
      assetRequestItems,
    },
    headers: {
      'Roblox-Place-Id': `${robloxPlaceId}`,
      Accept: `${accept}`,
      'Roblox-Browser-Asset-Request': `${robloxBrowserAssetRequest}`,
    },
  })
}
