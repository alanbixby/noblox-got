import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets a list of users in a group for a specific roleset.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @param roleSetId The group's role set id.
 * @param sortOrder Sorted by user group join date
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getGroupMembersInRole(
  client: NobloxClient,
  groupId: number,
  roleSetId: number,
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<UserModel[]>(
    `https://groups.roblox.com/v1/groups/${groupId}/roles/${roleSetId}/users`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
      searchParams: {
        sortOrder,
        limit,
        cursor,
      },
    }
  )
}
