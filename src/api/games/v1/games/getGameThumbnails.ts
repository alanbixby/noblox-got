import { NobloxClient } from '../../../../client/noblox.js'

/**
 * @deprecated Use https://thumbnails.roblox.com/docs#!/Games/get_v1_games_icons instead
 * ✅ Gets a list of game thumbnails
 *
 * @param client the inherited http client and noblox wrapper class
 * @param imageTokens TODO: DESCRIPTION HERE
 * @param height TODO: DESCRIPTION HERE
 * @param width TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getGameThumbnails(
  client: NobloxClient,
  imageTokens: string[],
  height?: number,
  width?: number
) {
  return await client.http<Thumbnail[]>(`https://games.roblox.com/v1/games/game-thumbnails`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      imageTokens,
      height,
      width,
    },
  })
}
