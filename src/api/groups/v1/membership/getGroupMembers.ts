import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of users in a group.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @param sortOrder The order the results are sorted in.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getGroupMembers(
  client: NobloxClient,
  groupId: number,
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<UserGroupRoleResponse[]>(`https://groups.roblox.com/v1/groups/${groupId}/users`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      sortOrder,
      limit,
      cursor,
    },
  })
}
