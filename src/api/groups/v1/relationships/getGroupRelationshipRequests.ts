import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets a group's relationship requests
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param groupRelationshipType The group relationship type of the request, only allies are supported.
 * @param modelStartRowIndex The start index of the page request
 * @param modelMaxRows The maximum number of rows for the page request, should be at least 1.
 * @return OK TODO:
 */
export async function getGroupRelationshipRequests(
  client: NobloxClient,
  groupId: number,
  groupRelationshipType: string,
  modelStartRowIndex?: number,
  modelMaxRows?: number
) {
  return await client.http<GroupRelationshipsResponse>(
    `https://groups.roblox.com/v1/groups/${groupId}/relationships/${groupRelationshipType}/requests`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
      searchParams: {
        'model.startRowIndex': modelStartRowIndex,
        'model.maxRows': modelMaxRows,
      },
    }
  )
}
