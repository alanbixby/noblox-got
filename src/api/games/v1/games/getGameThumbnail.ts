import { NobloxClient } from '../../../../client/noblox.js'

/**
 * @deprecated Use https://thumbnails.roblox.com/docs#!/Games/get_v1_games_icons instead
 * ✅ Get a single game thumbnail
 *
 * @param client the inherited http client and noblox wrapper class
 * @param imageToken TODO: DESCRIPTION HERE
 * @param height TODO: DESCRIPTION HERE
 * @param width TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getGameThumbnail(
  client: NobloxClient,
  imageToken: string,
  height?: number,
  width?: number
) {
  return await client.http<unknown>(`https://games.roblox.com/v1/games/game-thumbnail`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      imageToken,
      height,
      width,
    },
  })
}
