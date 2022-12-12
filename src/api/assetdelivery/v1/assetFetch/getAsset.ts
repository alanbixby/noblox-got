import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ TODO: DESCRIPTION HERE
 *
 * @param client the inherited http client and noblox wrapper class
 * @param acceptEncoding TODO: DESCRIPTION HERE
 * @param robloxPlaceId TODO: DESCRIPTION HERE
 * @param assetType TODO: DESCRIPTION HERE
 * @param accept TODO: DESCRIPTION HERE
 * @param assetFormat TODO: DESCRIPTION HERE
 * @param robloxAssetFormat TODO: DESCRIPTION HERE
 * @param id TODO: DESCRIPTION HERE
 * @param userAssetId TODO: DESCRIPTION HERE
 * @param assetVersionId TODO: DESCRIPTION HERE
 * @param version TODO: DESCRIPTION HERE
 * @param universeId TODO: DESCRIPTION HERE
 * @param clientInsert TODO: DESCRIPTION HERE
 * @param scriptinsert TODO: DESCRIPTION HERE
 * @param modulePlaceId TODO: DESCRIPTION HERE
 * @param serverplaceid TODO: DESCRIPTION HERE
 * @param assetName TODO: DESCRIPTION HERE
 * @param hash TODO: DESCRIPTION HERE
 * @param marAssetHash TODO: DESCRIPTION HERE
 * @param marCheckSum TODO: DESCRIPTION HERE
 * @param expectedAssetType TODO: DESCRIPTION HERE
 * @param skipSigningScripts TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getAsset(
  client: NobloxClient,
  acceptEncoding?: string,
  robloxPlaceId?: number,
  assetType?: string,
  accept?: string,
  assetFormat?: string,
  robloxAssetFormat?: string,
  id?: number,
  userAssetId?: number,
  assetVersionId?: number,
  version?: number,
  universeId?: number,
  clientInsert?: number,
  scriptinsert?: number,
  modulePlaceId?: number,
  serverplaceid?: string,
  assetName?: string,
  hash?: string,
  marAssetHash?: string,
  marCheckSum?: string,
  expectedAssetType?: string,
  skipSigningScripts?: boolean
) {
  return await client.http<RedirectResult>(`https://assetdelivery.roblox.com/v1/asset`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      id,
      userAssetId,
      assetVersionId,
      version,
      universeId,
      clientInsert,
      scriptinsert,
      modulePlaceId,
      serverplaceid,
      assetName,
      hash,
      marAssetHash,
      marCheckSum,
      expectedAssetType,
      skipSigningScripts,
    },
    headers: {
      'Accept-Encoding': `${acceptEncoding}`,
      'Roblox-Place-Id': `${robloxPlaceId}`,
      AssetType: `${assetType}`,
      Accept: `${accept}`,
      AssetFormat: `${assetFormat}`,
      'Roblox-AssetFormat': `${robloxAssetFormat}`,
    },
  })
}
