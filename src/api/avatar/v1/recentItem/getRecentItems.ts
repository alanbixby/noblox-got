import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * 🔒 Returns a list of recent items
Recent items can be Assets or Outfits
      * 
 * @param client the inherited http client and noblox wrapper class
 * @param recentItemListType TODO: DESCRIPTION HERE
 * @return OK TODO:
      */
export async function getRecentItems(
  client: NobloxClient,
  recentItemListType:
    | 'All'
    | 'Clothing'
    | 'BodyParts'
    | 'AvatarAnimations'
    | 'Accessories'
    | 'Outfits'
    | 'Gear'
) {
  return await client.http<RecentItemModel[]>(
    `https://avatar.roblox.com/v1/recent-items/${recentItemListType}/list`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
