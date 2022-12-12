import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get outfits for the given CSV of userIds
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userOutfitIds TODO: DESCRIPTION HERE
 * @param size The thumbnail size, formatted widthxheight
 * @param format The thumbnail format
 * @param isCircular The circle thumbnail output parameter, true or false
 * @return OK TODO:
 */
export async function getOutfits(
  client: NobloxClient,
  userOutfitIds: number[],
  size: '150x150' | '420x420' = '150x150',
  format: Png = Png,
  isCircular: boolean = false
) {
  return await client.http<ThumbnailResponse[]>(`https://thumbnails.roblox.com/v1/users/outfits`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      userOutfitIds,
      size,
      format,
      isCircular,
    },
  })
}
