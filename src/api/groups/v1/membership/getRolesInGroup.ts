import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of the rolesets in a group.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @return OK TODO:
 */
export async function getRolesInGroup(client: NobloxClient, groupId: number) {
  return await client.http<GroupAllRolesResponse>(`https://groups.roblox.com/v1/groups/${groupId}/roles`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
