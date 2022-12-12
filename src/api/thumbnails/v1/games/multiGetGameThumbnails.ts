import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Fetch game thumbnail URLs for a list of universe IDs.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeIds comma-delimited list of universe IDs
 * @param countPerUniverse max number of thumbnails to return per universe
 * @param defaults true if defaults (if any) should be returned if no media exists
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function multiGetGameThumbnails(
  client: NobloxClient,
  universeIds: number[],
  countPerUniverse?: number,
  defaults?: boolean,
  size: '768x432' | '576x324' | '480x270' | '384x216' | '256x144' = '768x432',
  format: Png | Jpeg = Png,
  isCircular: boolean = false
) {
  return await client.http<UniverseThumbnailsResponse[]>(
    `https://thumbnails.roblox.com/v1/games/multiget/thumbnails`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        universeIds,
        countPerUniverse,
        defaults,
        size,
        format,
        isCircular,
      },
    }
  )
}
