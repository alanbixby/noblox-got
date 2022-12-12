import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Batch accepts group join requests
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @param request The {Roblox.Groups.Api.MembersRequest}.
 * @return OK TODO:
 */
export async function acceptBatchJoinRequests(
  client: NobloxClient,
  groupId: number,
  request: MembersRequest
) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/join-requests`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
