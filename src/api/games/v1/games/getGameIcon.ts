import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get the game icon
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The id of the universe to get the icon for.
 * @return OK TODO:
 */
export async function getGameIcon(client: NobloxClient, universeId: number) {
  return await client.http<GameIconResponse>(`https://games.roblox.com/v1/games/${universeId}/icon`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
