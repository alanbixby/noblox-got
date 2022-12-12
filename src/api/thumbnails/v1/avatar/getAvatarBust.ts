import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get Avatar Busts for the given CSV of userIds
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userIds CSV for the userIds to get avatar headshots
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function getAvatarBust(
  client: NobloxClient,
  userIds: number[],
  size: '50x50' | '60x60' | '75x75' = '50x50',
  format: Png = Png,
  isCircular: boolean = false
) {
  return await client.http<ThumbnailResponse[]>(`https://thumbnails.roblox.com/v1/users/avatar-bust`, {
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
