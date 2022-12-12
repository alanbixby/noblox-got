import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates the group icon.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param requestFiles TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function changeGroupIcon(client: NobloxClient, groupId: number, requestFiles?: fs.ReadStream) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/icon`, {
    method: 'PATCH',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    searchParams: {
      groupId,
    },
    form: {
      'request.files': requestFiles,
    },
  })
}
