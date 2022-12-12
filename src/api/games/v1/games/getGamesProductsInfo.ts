import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of games' product info, used to purchase a game
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
 * @return Get the games product info successfully. Invalid games do not get returned.
 */
export async function getGamesProductsInfo(client: NobloxClient, universeIds: number[]) {
  return await client.http<GameProductResponse[]>(`https://games.roblox.com/v1/games/games-product-info`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      universeIds,
    },
  })
}
