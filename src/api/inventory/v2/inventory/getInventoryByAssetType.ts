import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets user's inventory based on specific asset type
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user Id of the inventory owner
 * @param assetTypeId The asset type Id of the items to get
 * @param sortOrder The order the results are sorted in.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getInventoryByAssetType(
  client: NobloxClient,
  userId: number,
  assetTypeId: number,
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<InventoryItemModel[]>(
    `https://inventory.roblox.com/v2/users/${userId}/inventory/${assetTypeId}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
      searchParams: {
        sortOrder,
        limit,
        cursor,
      },
    }
  )
}
