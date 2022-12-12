import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Returns details about the given bundleIds.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param bundleIds TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getBundlesDetails(client: NobloxClient, bundleIds: number[]) {
  return await client.http<BundleDetailsModel[]>(`https://catalog.roblox.com/v1/bundles/details`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      bundleIds,
    },
  })
}
