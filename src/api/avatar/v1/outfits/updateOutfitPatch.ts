import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates the contents of an outfit.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userOutfitId The user outfit id.
 * @param outfitUpdateModel The updated outfit
 * @return OK TODO:
 */
export async function updateOutfitPatch(
  client: NobloxClient,
  userOutfitId: number,
  outfitUpdateModel: OutfitUpdateModel
) {
  return await client.http<OutfitModel>(`https://avatar.roblox.com/v1/outfits/${userOutfitId}`, {
    method: 'PATCH',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      outfitUpdateModel,
    },
  })
}
