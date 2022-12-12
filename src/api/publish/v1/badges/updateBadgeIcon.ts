import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Overwrites a badge icon with a new one.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param badgeId The badge Id.
 * @param requestFiles TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function updateBadgeIcon(client: NobloxClient, badgeId: number, requestFiles?: fs.ReadStream) {
  return await client.http<UploadResponse>(`https://publish.roblox.com/v1/badges/${badgeId}/icon`, {
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
