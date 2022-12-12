import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Batch accepts group affiliate requests
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @param groupRelationshipType The type of group relationship being made
 * @param request The {Roblox.Groups.Api.RelationshipsRequest}.
 * @return OK TODO:
 */
export async function acceptBatchAffiliateRequests(
  client: NobloxClient,
  groupId: number,
  groupRelationshipType: string,
  request: RelationshipsRequest
) {
  return await client.http<{}>(
    `https://groups.roblox.com/v1/groups/${groupId}/relationships/${groupRelationshipType}/requests`,
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
