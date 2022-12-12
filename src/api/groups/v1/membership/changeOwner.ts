import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Changes the group owner to another user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param changeOwnerRequest The request.
 * @return OK TODO:
 */
export async function changeOwner(
  client: NobloxClient,
  groupId: number,
  changeOwnerRequest: ChangeOwnerRequest
) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/change-owner`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      changeOwnerRequest,
    },
  })
}
