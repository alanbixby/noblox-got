import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Generic recommendations endpoint for various catalog subjects - assets, bundles, user-inventory etc
 *
 * @param client the inherited http client and noblox wrapper class
 * @param subject one of assets, bundles, user-inventory
 * @param assetTypeId assetTypeId for assets and user-inventory recommendations
 * @param numItems number items to return
 * @param assetId AssetId for subject = assets
 * @param bundleId BundleId for subject = bundles
 * @return OK TODO:
 */
export async function getRecommendationsForSubject(
  client: NobloxClient,
  subject: string,
  assetTypeId?: number,
  numItems?: number,
  assetId?: number,
  bundleId?: number
) {
  return await client.http<Int64[]>(`https://catalog.roblox.com/v2/recommendations/${subject}`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
    searchParams: {
      assetTypeId,
      numItems,
      assetId,
      bundleId,
    },
  })
}
