import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Deletes the outfit
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userOutfitId The user outfit id
 * @return OK TODO:
 */
export async function deleteOutfit(client: NobloxClient, userOutfitId: number) {
  return await client.http<ApiSuccessResponse>(
    `https://avatar.roblox.com/v1/outfits/${userOutfitId}/delete`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
