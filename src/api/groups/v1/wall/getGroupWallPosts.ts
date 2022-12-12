import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets a list of group wall posts.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @param sortOrder Sorted by group wall post Id
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getGroupWallPosts(
  client: NobloxClient,
  groupId: number,
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<GroupWallPostModel[]>(
    `https://groups.roblox.com/v1/groups/${groupId}/wall/posts`,
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
