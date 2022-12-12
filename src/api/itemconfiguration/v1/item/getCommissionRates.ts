import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the commission rates related to assetTypes
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getCommissionRates(client: NobloxClient) {
  return await client.http<CommissionRatesResponse[]>(
    `https://itemconfiguration.roblox.com/v1/get-commission-rates`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
