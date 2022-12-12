import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Update parameters for the given asset
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId TODO: DESCRIPTION HERE
 * @param updateAssetRequest TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function update(client: NobloxClient, assetId: number, updateAssetRequest: UpdateAssetRequest) {
  return await client.http<{}>(`https://itemconfiguration.roblox.com/v1/assets/${assetId}/update`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      updateAssetRequest,
    },
  })
}
