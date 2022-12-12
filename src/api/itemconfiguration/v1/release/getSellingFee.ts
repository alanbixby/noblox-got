import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the selling fee required to release the given asset
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getSellingFee(client: NobloxClient, assetId: number) {
  return await client.http<GetSellingFeeResponse>(
    `https://itemconfiguration.roblox.com/v1/assets/${assetId}/get-selling-fee`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
