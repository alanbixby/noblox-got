import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Uploads a game thumbnail.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param gameId The universe Id.
 * @param requestFiles TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function uploadGameThumbnail(
  client: NobloxClient,
  gameId: number,
  requestFiles?: fs.ReadStream
) {
  return await client.http<UploadResponse>(`https://publish.roblox.com/v1/games/${gameId}/thumbnail/image`, {
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
