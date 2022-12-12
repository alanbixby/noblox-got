import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets available PremiumFeatures Products available to the user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param typeName TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getAvailablePremiumFeaturesProducts(client: NobloxClient, typeName?: string) {
  return await client.http<unknown>(`https://premiumfeatures.roblox.com/v1/products`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      typeName,
    },
  })
}
