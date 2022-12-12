import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Update the price for the given asset
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId TODO: DESCRIPTION HERE
 * @param updatePriceForAssetRequest TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function updatePrice(
  client: NobloxClient,
  assetId: number,
  updatePriceForAssetRequest: UpdatePriceForAssetRequest
) {
  return await client.http<{}>(`https://itemconfiguration.roblox.com/v1/assets/${assetId}/update-price`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      updatePriceForAssetRequest,
    },
  })
}
