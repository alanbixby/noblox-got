import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets the permissions for a group's roleset. The authorized user must either be the group owner or the roleset being requested, except for guest roles, which can be viewed by all (members and guests).
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @param roleSetId The group's role set id.
 * @return OK TODO:
 */
export async function getPermissionsForGroupRole(client: NobloxClient, groupId: number, roleSetId: number) {
  return await client.http<GroupPermissionsResponse>(
    `https://groups.roblox.com/v1/groups/${groupId}/roles/${roleSetId}/permissions`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
