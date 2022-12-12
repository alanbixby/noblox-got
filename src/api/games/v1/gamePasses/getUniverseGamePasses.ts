import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get the game's game passes
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The id of the universe.
 * @param sortOrder The order the results are sorted in.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return Get the game's game passes successfully.
 */
export async function getUniverseGamePasses(
  client: NobloxClient,
  universeId: number,
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<GamePassResponse[]>(
    `https://games.roblox.com/v1/games/${universeId}/game-passes`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        sortOrder,
        limit,
        cursor,
      },
    }
  )
}
