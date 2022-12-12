import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Creates new group roleset.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param request The {Roblox.Groups.Api.Models.Request.CreateRoleSetRequest}.
 * @return OK TODO:
 */
export async function createRoleset(client: NobloxClient, groupId: number, request: CreateRoleSetRequest) {
  return await client.http<GroupRoleResponse>(
    `https://groups.roblox.com/v1/groups/${groupId}/rolesets/create`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        request,
      },
    }
  )
}
