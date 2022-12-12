import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Given a package ID, returns the list of asset IDs for that package
 *
 * @param client the inherited http client and noblox wrapper class
 * @param packageId The asset ID of the package
 * @return OK TODO:
 */
export async function getPackageAssets(client: NobloxClient, packageId: number) {
  return await client.http<AssetIdListModel>(`https://inventory.roblox.com/v1/packages/${packageId}/assets`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
