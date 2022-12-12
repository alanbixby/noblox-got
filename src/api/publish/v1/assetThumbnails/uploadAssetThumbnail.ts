import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Uploads a thumbnail of an asset, including Models, Meshes, Audio, Plugins
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId The asset Id.
 * @param requestFiles TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function uploadAssetThumbnail(
  client: NobloxClient,
  assetId: number,
  requestFiles?: fs.ReadStream
) {
  return await client.http<UploadResponse>(`https://publish.roblox.com/v1/assets/${assetId}/thumbnail`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    form: {
      'request.files': requestFiles,
    },
  })
}
