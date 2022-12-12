import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get the favorites count of the a specific game
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The Id of the universe.
 * @return OK TODO:
 */
export async function getFavoritesCount(client: NobloxClient, universeId: number) {
  return await client.http<GameFavoritesCountResponse>(
    `https://games.roblox.com/v1/games/${universeId}/favorites/count`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
