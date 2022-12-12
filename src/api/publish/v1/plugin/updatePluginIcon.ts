import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Overwrites a plugin icon with a new one.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param pluginId The plugin Id.
 * @param requestFiles TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function updatePluginIcon(client: NobloxClient, pluginId: number, requestFiles?: fs.ReadStream) {
  return await client.http<UploadResponse>(`https://publish.roblox.com/v1/plugins/${pluginId}/icon`, {
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
