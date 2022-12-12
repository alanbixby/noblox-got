import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Overwrites a game pass icon with a new one.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param gamePassId The game pass Id.
 * @param requestFiles TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function uploadGamePassIcon(
  client: NobloxClient,
  gamePassId: number,
  requestFiles?: fs.ReadStream
) {
  return await client.http<UploadResponse>(`https://publish.roblox.com/v1/game-passes/${gamePassId}/icon`, {
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
