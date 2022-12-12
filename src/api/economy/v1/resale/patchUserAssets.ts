import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sets copies of an asset owned by the authenticated user for sale
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId TODO: DESCRIPTION HERE
 * @param userAssetId TODO: DESCRIPTION HERE
 * @param request TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function patchUserAssets(
  client: NobloxClient,
  assetId: number,
  userAssetId: number,
  request: UserAssetsPatchRequest
) {
  return await client.http<{}>(
    `https://economy.roblox.com/v1/assets/${assetId}/resellable-copies/${userAssetId}`,
    {
      method: 'PATCH',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        request,
      },
    }
  )
}
