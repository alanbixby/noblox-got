import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates existing group roleset.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param rolesetId The roleset Id.
 * @param request The {Roblox.Groups.Api.Models.Request.UpdateRoleSetRequest}.
 * @return OK TODO:
 */
export async function updateRoleset(
  client: NobloxClient,
  groupId: number,
  rolesetId: number,
  request: UpdateRoleSetRequest
) {
  return await client.http<GroupRoleResponse>(
    `https://groups.roblox.com/v1/groups/${groupId}/rolesets/${rolesetId}`,
    {
      method: 'PATCH',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        request,
      },
    }
  )
}
