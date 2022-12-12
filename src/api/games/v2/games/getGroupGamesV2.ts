import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets games created by the specified group. This will replace V1 after validation. Note that this can only used for public/all universes.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param accessFilter Filtering option via access level.
 * @param sortOrder The order the results are sorted in.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getGroupGamesV2(
  client: NobloxClient,
  groupId: number,
  accessFilter?: 'All' | 'Public' | 'Private',
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<GameResponseV2[]>(`https://games.roblox.com/v2/groups/${groupId}/gamesV2`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      accessFilter,
      sortOrder,
      limit,
      cursor,
    },
  })
}
