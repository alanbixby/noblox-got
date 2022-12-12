import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Fetches game thumbnail URLs for a list of universes' thumbnail ids. Ids that do not correspond to a valid thumbnail will be filtered out.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId TODO: DESCRIPTION HERE
 * @param thumbnailIds TODO: DESCRIPTION HERE
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function getGameThumbnails(
  client: NobloxClient,
  universeId: number,
  thumbnailIds: number[],
  size: '768x432' | '576x324' | '480x270' | '384x216' | '256x144' = '768x432',
  format: Png | Jpeg = Png,
  isCircular: boolean = false
) {
  return await client.http<ThumbnailResponse[]>(
    `https://thumbnails.roblox.com/v1/games/${universeId}/thumbnails`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        thumbnailIds,
        size,
        format,
        isCircular,
      },
    }
  )
}
