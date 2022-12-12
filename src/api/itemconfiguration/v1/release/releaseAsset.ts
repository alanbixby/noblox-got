import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Release the asset with the given price
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId TODO: DESCRIPTION HERE
 * @param releaseAssetRequest TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function releaseAsset(
  client: NobloxClient,
  assetId: number,
  releaseAssetRequest: ReleaseAssetRequest
) {
  return await client.http<{}>(`https://itemconfiguration.roblox.com/v1/assets/${assetId}/release`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      releaseAssetRequest,
    },
  })
}
