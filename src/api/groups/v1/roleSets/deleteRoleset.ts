import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Deletes existing group roleset.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param rolesetId The roleset Id.
 * @return OK TODO:
 */
export async function deleteRoleset(client: NobloxClient, groupId: number, rolesetId: number) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/rolesets/${rolesetId}`, {
    method: 'DELETE',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
