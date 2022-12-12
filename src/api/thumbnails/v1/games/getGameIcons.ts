import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Fetches game icon URLs for a list of universes' root places. Ids that do not correspond to a valid universe will be filtered out.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeIds The universe ids.
 * @param returnPolicy Optional policy to use in selecting game icon to return (default = PlaceHolder).
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function getGameIcons(
  client: NobloxClient,
  universeIds: number[],
  returnPolicy?: 'PlaceHolder' | 'AutoGenerated' | 'ForceAutoGenerated',
  size: '50x50' | '128x128' | '150x150' | '256x256' | '512x512' = '50x50',
  format: Png | Jpeg = Png,
  isCircular: boolean = false
) {
  return await client.http<ThumbnailResponse[]>(`https://thumbnails.roblox.com/v1/games/icons`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
    },
    searchParams: {
      universeIds,
      returnPolicy,
      size,
      format,
      isCircular,
    },
  })
}