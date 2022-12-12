import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates the permissions for a group's roleset. The authorized user must be the group owner.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group's id.
 * @param roleSetId The roleset's id.
 * @param updatePermissionsRequest The request.
 * @return OK TODO:
 */
export async function updatePermissionsForGroupRole(
  client: NobloxClient,
  groupId: number,
  roleSetId: number,
  updatePermissionsRequest: UpdatePermissionsRequest
) {
  return await client.http<{}>(
    `https://groups.roblox.com/v1/groups/${groupId}/roles/${roleSetId}/permissions`,
    {
      method: 'PATCH',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        updatePermissionsRequest,
      },
    }
  )
}
