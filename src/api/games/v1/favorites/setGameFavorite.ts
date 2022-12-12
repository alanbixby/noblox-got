import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Favors (or unfavors) a game for the authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The Id of the universe.
 * @param request Request data.
 * @return OK TODO:
 */
export async function setGameFavorite(
  client: NobloxClient,
  universeId: number,
  request: GameFavoritesRequest
) {
  return await client.http<{}>(`https://games.roblox.com/v1/games/${universeId}/favorites`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      request,
    },
  })
}
