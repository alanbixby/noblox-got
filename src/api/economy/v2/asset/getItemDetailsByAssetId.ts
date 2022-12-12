import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Retrieves the product and asset details given its id.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId The id of the asset.
 * @return OK TODO:
 */
export async function getItemDetailsByAssetId(client: NobloxClient, assetId: number) {
  return await client.http<ItemDetailResponse>(`https://economy.roblox.com/v2/assets/${assetId}/details`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
