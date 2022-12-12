import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a group's relationships
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param groupRelationshipType The group relationship type, enemies or allies.
 * @param modelStartRowIndex The start index of the page request
 * @param modelMaxRows The maximum number of rows for the page request, should be at least 1.
 * @return OK TODO:
 */
export async function getRelatedGroups(
  client: NobloxClient,
  groupId: number,
  groupRelationshipType: string,
  modelStartRowIndex?: number,
  modelMaxRows?: number
) {
  return await client.http<GroupRelationshipsResponse>(
    `https://groups.roblox.com/v1/groups/${groupId}/relationships/${groupRelationshipType}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        'model.startRowIndex': modelStartRowIndex,
        'model.maxRows': modelMaxRows,
      },
    }
  )
}
