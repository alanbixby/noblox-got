import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets a list of owners of an asset.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId The asset id.
 * @param sortOrder Sorted by userAssetId
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getAssetOwners(
  client: NobloxClient,
  assetId: number,
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<AssetOwnerResponse[]>(`https://inventory.roblox.com/v2/assets/${assetId}/owners`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
    },
    searchParams: {
      sortOrder,
      limit,
      cursor,
    },
  })
}
