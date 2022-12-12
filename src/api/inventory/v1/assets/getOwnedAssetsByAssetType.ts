import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets the "My" assets you own of an asset type
 *
 * @param client the inherited http client and noblox wrapper class
 * @param type The {Roblox.Platform.Assets.AssetType} such as 'Model'.
 * @param limit The pagesize.
 * @param cursor The last id of the previous search
 * @return OK TODO:
 */
export async function getOwnedAssetsByAssetType(
  client: NobloxClient,
  type: string,
  limit: number,
  cursor: string
) {
  return await client.http<OwnedAssetsResponse>(`https://inventory.roblox.com/v1/assets/owned`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      type,
      limit,
      cursor,
    },
  })
}
