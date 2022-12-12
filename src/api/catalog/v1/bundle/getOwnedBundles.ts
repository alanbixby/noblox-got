import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Lists the bundles owned by a given user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param sortOrder Sorted by bundle
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getOwnedBundles(
  client: NobloxClient,
  userId: number,
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<OwnedBundleModel[]>(`https://catalog.roblox.com/v1/users/${userId}/bundles`, {
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
