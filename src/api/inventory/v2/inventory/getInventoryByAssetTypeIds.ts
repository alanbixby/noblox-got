import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Get user's inventory by multiple {Roblox.Platform.Assets.AssetType}.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The inventory owner's userId.
 * @param assetTypes The asset types to query.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 * @return OK TODO:
 */
export async function getInventoryByAssetTypeIds(
  client: NobloxClient,
  userId: number,
  assetTypes: fs.ReadStream,
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string,
  sortOrder: 'Asc' | 'Desc' = 'Asc'
) {
  return await client.http<UserAssetItemModelV2[]>(
    `https://inventory.roblox.com/v2/users/${userId}/inventory`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
      searchParams: {
        assetTypes,
        limit,
        cursor,
        sortOrder,
      },
    }
  )
}
