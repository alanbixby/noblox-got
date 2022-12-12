import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets game details.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param gameId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getGame(client: NobloxClient, gameId: number) {
  return await client.http<GameResponse>(`https://share.roblox.com/v1/share/${gameId}/game`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
