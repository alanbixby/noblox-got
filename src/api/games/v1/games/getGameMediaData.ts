import { NobloxClient } from '../../../../client/noblox.js'

/**
 * @deprecated Use https://games.roblox.com/v2/games/{universeId}/media instead
 * ✅ Get the game media data
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The id of the universe we get media data from.
 * @return Get the game media data successfully.
 */
export async function getGameMediaData(client: NobloxClient, universeId: number) {
  return await client.http<GameMediaItem[]>(`https://games.roblox.com/v1/games/${universeId}/media`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
