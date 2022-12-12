import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets games created by the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user Id.
 * @param accessFilter Filtering option via access level.
 * @param sortOrder The order the results are sorted in.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getUserGames(
  client: NobloxClient,
  userId: number,
  accessFilter?: 'All' | 'Public' | 'Private',
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 = 50,
  cursor?: string
) {
  return await client.http<GameResponseV2[]>(`https://games.roblox.com/v2/users/${userId}/games`, {
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
