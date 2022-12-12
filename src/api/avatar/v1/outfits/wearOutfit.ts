import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Wears the outfit
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userOutfitId The user outfit id
 * @return OK TODO:
 */
export async function wearOutfit(client: NobloxClient, userOutfitId: number) {
  return await client.http<WearResponseModel>(`https://avatar.roblox.com/v1/outfits/${userOutfitId}/wear`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
