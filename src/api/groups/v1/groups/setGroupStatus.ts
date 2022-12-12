import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sets group status
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param statusRequest The {Roblox.Groups.Api.PostGroupStatusRequest}.
 * @return OK TODO:
 */
export async function setGroupStatus(
  client: NobloxClient,
  groupId: number,
  statusRequest: PostGroupStatusRequest
) {
  return await client.http<ShoutResponse>(`https://groups.roblox.com/v1/groups/${groupId}/status`, {
    method: 'PATCH',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      statusRequest,
    },
  })
}
