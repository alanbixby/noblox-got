import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * ✅ Gets recommendations for a given bundle, bundleId of 0 returns randomized bundles
- Accepts both public and authenticated users
      * 
 * @param client the inherited http client and noblox wrapper class
 * @param bundleId TODO: DESCRIPTION HERE
 * @param numItems The number of recommended items to return.
 * @return OK TODO:
      */
export async function getBundleRecommendations(client: NobloxClient, bundleId: number, numItems?: number) {
  return await client.http<BundleDetailsModel[]>(
    `https://catalog.roblox.com/v1/bundles/${bundleId}/recommendations`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        numItems,
      },
    }
  )
}
