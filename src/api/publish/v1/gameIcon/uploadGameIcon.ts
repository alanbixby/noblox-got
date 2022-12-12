import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Overwrites a game icon with a new one.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param gameId The universe Id.
 * @param requestFiles TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function uploadGameIcon(client: NobloxClient, gameId: number, requestFiles?: fs.ReadStream) {
  return await client.http<UploadResponse>(`https://publish.roblox.com/v1/games/${gameId}/icon`, {
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
