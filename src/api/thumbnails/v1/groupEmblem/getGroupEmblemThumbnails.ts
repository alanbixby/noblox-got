import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Fetches thumbnail URLs for a list of groups. Ids that do not correspond to groups will be filtered out.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupIds TODO: DESCRIPTION HERE
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function getGroupEmblemThumbnails(
  client: NobloxClient,
  groupIds: number[],
  size: '150x150' | '420x420' = '150x150',
  format: Png = Png,
  isCircular: boolean = false
) {
  return await client.http<ThumbnailResponse[]>(`https://thumbnails.roblox.com/v1/groups/icons`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      groupIds,
      size,
      format,
      isCircular,
    },
  })
}
