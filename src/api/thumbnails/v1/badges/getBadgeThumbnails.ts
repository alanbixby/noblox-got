import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Thumbnails badge icons.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param badgeIds The badge ids.
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function getBadgeThumbnails(
  client: NobloxClient,
  badgeIds: number[],
  size: '150x150' = '150x150',
  format: Png = Png,
  isCircular: boolean = false
) {
  return await client.http<ThumbnailResponse[]>(`https://thumbnails.roblox.com/v1/badges/icons`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      badgeIds,
      size,
      format,
      isCircular,
    },
  })
}
