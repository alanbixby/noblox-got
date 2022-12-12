import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of games' detail
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
 * @return Get the game details successfully.
 */
export async function getGameDetails(client: NobloxClient, universeIds: number[]) {
  return await client.http<GameDetailResponse[]>(`https://games.roblox.com/v1/games`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      universeIds,
    },
  })
}
