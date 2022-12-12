import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets asset resale data.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId The asset id.
 * @return OK TODO:
 */
export async function getAssetResaleData(client: NobloxClient, assetId: number) {
  return await client.http<ResaleDataResponse>(
    `https://economy.roblox.com/v1/assets/${assetId}/resale-data`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
