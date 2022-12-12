import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get Avatar Full body shots for the given CSV of userIds
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userIds CSV for the userIds to get avatar full body shots
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function getAvatarThumbnail(
  client: NobloxClient,
  userIds: number[],
  size:
    | '30x30'
    | '48x48'
    | '60x60'
    | '75x75'
    | '100x100'
    | '110x110'
    | '140x140'
    | '150x150'
    | '150x200'
    | '180x180'
    | '250x250'
    | '352x352'
    | '420x420'
    | '720x720' = '30x30',
  format: Png | Jpeg = Png,
  isCircular: boolean = false
) {
  return await client.http<ThumbnailResponse[]>(`https://thumbnails.roblox.com/v1/users/avatar`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      userIds,
      size,
      format,
      isCircular,
    },
  })
}
