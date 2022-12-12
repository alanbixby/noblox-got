import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of outfits for the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user id
 * @param page The page number
 * @param itemsPerPage The max number of outfits that can be returned
 * @param isEditable Whether the outfits are editable. A null value will lead to no filtering.
 * @return OK TODO:
 */
export async function getUserOutfitListModel(
  client: NobloxClient,
  userId: number,
  page?: number,
  itemsPerPage?: number,
  isEditable?: boolean
) {
  return await client.http<OutfitModel[]>(`https://avatar.roblox.com/v1/users/${userId}/outfits`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      page,
      itemsPerPage,
      isEditable,
    },
  })
}
