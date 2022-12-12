import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ TODO: DESCRIPTION HERE
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId TODO: DESCRIPTION HERE
 * @param acceptEncoding TODO: DESCRIPTION HERE
 * @param robloxPlaceId TODO: DESCRIPTION HERE
 * @param assetType TODO: DESCRIPTION HERE
 * @param accept TODO: DESCRIPTION HERE
 * @param assetFormat TODO: DESCRIPTION HERE
 * @param robloxAssetFormat TODO: DESCRIPTION HERE
 * @param skipSigningScripts TODO: DESCRIPTION HERE
 * @param clientInsert TODO: DESCRIPTION HERE
 * @param scriptinsert TODO: DESCRIPTION HERE
 * @param modulePlaceId TODO: DESCRIPTION HERE
 * @param serverplaceid TODO: DESCRIPTION HERE
 * @param expectedAssetType TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getAssetbyId(
  client: NobloxClient,
  assetId: number,
  acceptEncoding?: string,
  robloxPlaceId?: number,
  assetType?: string,
  accept?: string,
  assetFormat?: string,
  robloxAssetFormat?: string,
  skipSigningScripts?: boolean,
  clientInsert?: number,
  scriptinsert?: number,
  modulePlaceId?: number,
  serverplaceid?: number,
  expectedAssetType?: string
) {
  return await client.http<IAssetResponseItem>(`https://assetdelivery.roblox.com/v1/assetId/${assetId}`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      skipSigningScripts,
      clientInsert,
      scriptinsert,
      modulePlaceId,
      serverplaceid,
      expectedAssetType,
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
