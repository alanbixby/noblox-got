import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get Avatar Headshots for the given CSV of userIds
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userIds CSV for the userIds to get avatar headshots
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function getAvatarHeadShot(
  client: NobloxClient,
  userIds: number[],
  size:
    | '48x48'
    | '50x50'
    | '60x60'
    | '75x75'
    | '100x100'
    | '110x110'
    | '150x150'
    | '180x180'
    | '352x352'
    | '420x420'
    | '720x720' = '48x48',
  format: Png | Jpeg = Png,
  isCircular: boolean = false
) {
  return await client.http<ThumbnailResponse[]>(`https://thumbnails.roblox.com/v1/users/avatar-headshot`, {
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
