import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Returns details about the given bundleId.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param bundleId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getBundleDetails(client: NobloxClient, bundleId: number) {
  return await client.http<BundleDetailsModel>(`https://catalog.roblox.com/v1/bundles/${bundleId}/details`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
