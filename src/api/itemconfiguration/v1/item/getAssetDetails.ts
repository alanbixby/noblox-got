import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Gets the asset status and other configuration details for the given assetIds list
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getAssetDetails(client: NobloxClient, request: AssetCreationsDetailsRequest) {
  return await client.http<AssetCreationsDetailsResponse[]>(
    `https://itemconfiguration.roblox.com/v1/creations/get-asset-details`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
      json: {
        request,
      },
    }
  )
}
