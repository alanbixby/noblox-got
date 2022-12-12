import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets games that the client should spotlight.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return Get the spotlight games successfully.
 */
export async function getSpotlightGames(client: NobloxClient) {
  return await client.http<GameSpotlightResponse[]>(`https://games.roblox.com/v1/games/list-spotlight`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
