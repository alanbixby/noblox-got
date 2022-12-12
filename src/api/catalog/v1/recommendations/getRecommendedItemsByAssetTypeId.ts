import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * ✅ Gets a list of recommended assets, given an asset type
- Migrated from Inventory.Api, functional similarity preserved
      * 
 * @param client the inherited http client and noblox wrapper class
 * @param assetTypeId The asset type id {Roblox.AssetType}
 * @param numItems The number of recommended items to return.
 * @param contextAssetId Optional asset id
 * @return OK TODO:
      */
export async function getRecommendedItemsByAssetTypeId(
  client: NobloxClient,
  assetTypeId: number,
  numItems?: number,
  contextAssetId?: number
) {
  return await client.http<RecommendationViewModelV2[]>(
    `https://catalog.roblox.com/v1/recommendations/asset/${assetTypeId}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        numItems,
        contextAssetId,
      },
    }
  )
}
