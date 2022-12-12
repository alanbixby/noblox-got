import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Returns if a game was marked as favorite for the authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The Id of the universe.
 * @return OK TODO:
 */
export async function getGameFavorite(client: NobloxClient, universeId: number) {
  return await client.http<GameFavoriteResponse>(
    `https://games.roblox.com/v1/games/${universeId}/favorites`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
