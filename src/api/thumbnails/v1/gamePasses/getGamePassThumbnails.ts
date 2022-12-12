import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Thumbnails game pass icons.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param gamePassIds The game pass ids.
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function getGamePassThumbnails(
  client: NobloxClient,
  gamePassIds: number[],
  size: '150x150' = '150x150',
  format: Png = Png,
  isCircular: boolean = false
) {
  return await client.http<ThumbnailResponse[]>(`https://thumbnails.roblox.com/v1/game-passes`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      gamePassIds,
      size,
      format,
      isCircular,
    },
  })
}
