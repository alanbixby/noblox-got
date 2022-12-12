import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get bundle thumbnails for the given CSV of bundle ids
 *
 * @param client the inherited http client and noblox wrapper class
 * @param bundleIds CSV for the bundle ids to get bundle thumbnails
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function getBundleThumbnails(
  client: NobloxClient,
  bundleIds: number[],
  size: '150x150' | '420x420' = '150x150',
  format: Png = Png,
  isCircular: boolean = false
) {
  return await client.http<ThumbnailResponse[]>(`https://thumbnails.roblox.com/v1/bundles/thumbnails`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      bundleIds,
      size,
      format,
      isCircular,
    },
  })
}
