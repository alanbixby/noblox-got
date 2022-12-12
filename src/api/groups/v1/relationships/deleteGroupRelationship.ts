import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Deletes a group relationship.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @param groupRelationshipType The group relationship type, enemies or allies.
 * @param relatedGroupId The id of the group you want to delete the relationship with.
 * @return OK TODO:
 */
export async function deleteGroupRelationship(
  client: NobloxClient,
  groupId: number,
  groupRelationshipType: string,
  relatedGroupId: number
) {
  return await client.http<{}>(
    `https://groups.roblox.com/v1/groups/${groupId}/relationships/${groupRelationshipType}/${relatedGroupId}`,
    {
      method: 'DELETE',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
