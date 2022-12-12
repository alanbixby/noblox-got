import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets an ordered list of all sorts
 *
 * @param client the inherited http client and noblox wrapper class
 * @param modelGameSortsContext Context to determine which game sorts are being requested.
 * @return TODO:
 */
export async function sorts(
  client: NobloxClient,
  modelGameSortsContext?:
    | 'GamesDefaultSorts'
    | 'GamesAllSorts'
    | 'HomeSorts'
    | 'ChatSorts'
    | 'UnifiedHomeSorts'
    | 'GamesPageAbTestSorts1'
    | 'GamesPageAbTestSorts2'
) {
  return await client.http<GameSortsResponse>(`https://games.roblox.com/v1/games/sorts`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      'model.gameSortsContext': modelGameSortsContext,
    },
  })
}
