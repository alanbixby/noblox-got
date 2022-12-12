import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates a users role in a group.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The id of the group the user is in.
 * @param userId The id of the user being updated.
 * @param request The {Roblox.Groups.Api.UpdateUserRoleRequest}.
 * @return OK TODO:
 */
export async function updateUserGroupRole(
  client: NobloxClient,
  groupId: number,
  userId: number,
  request: UpdateUserRoleRequest
) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/users/${userId}`, {
    method: 'PATCH',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
