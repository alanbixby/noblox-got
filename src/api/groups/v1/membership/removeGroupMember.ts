import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Removes a user from a group
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param userId The Id of the user being removed.
 * @return OK TODO:
 */
export async function removeGroupMember(client: NobloxClient, groupId: number, userId: number) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/users/${userId}`, {
    method: 'DELETE',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
