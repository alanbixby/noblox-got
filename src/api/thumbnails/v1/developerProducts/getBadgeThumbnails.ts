import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Thumbnails developer product icons.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param developerProductIds The developer product ids.
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function getBadgeThumbnails(
  client: NobloxClient,
  developerProductIds: number[],
  size: '150x150' | '420x420' = '150x150',
  format: Png = Png,
  isCircular: boolean = false
) {
  return await client.http<ThumbnailResponse[]>(`https://thumbnails.roblox.com/v1/developer-products/icons`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      developerProductIds,
      size,
      format,
      isCircular,
    },
  })
}
