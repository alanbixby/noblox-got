import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Lists the bundles a particular asset belongs to. Use the Id of the last bundle in the response to get the next page.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId TODO: DESCRIPTION HERE
 * @param sortOrder The order the results are sorted in.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getBundlesByAssetId(
  client: NobloxClient,
  assetId: number,
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<BundleDetailsModel[]>(`https://catalog.roblox.com/v1/assets/${assetId}/bundles`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      sortOrder,
      limit,
      cursor,
    },
  })
}
