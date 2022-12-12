import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets asset resale related metadata.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getAssetResaleTaxRate(client: NobloxClient) {
  return await client.http<ResaleTaxRateResponse>(`https://economy.roblox.com/v1/resale-tax-rate`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
