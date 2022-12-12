import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ TODO: DESCRIPTION HERE
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param bundleType TODO: DESCRIPTION HERE
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 * @return OK TODO:
 */
export async function getOwnedBundlesByBundleType(
  client: NobloxClient,
  userId: number,
  bundleType: 'BodyParts' | 'AvatarAnimations',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string,
  sortOrder: 'Asc' | 'Desc' = 'Desc'
) {
  return await client.http<OwnedBundleModel[]>(
    `https://catalog.roblox.com/v1/users/${userId}/bundles/${bundleType}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        limit,
        cursor,
        sortOrder,
      },
    }
  )
}
