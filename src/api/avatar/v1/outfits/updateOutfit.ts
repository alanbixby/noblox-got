import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates the contents of the outfit.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userOutfitId The user outfit id.
 * @param outfitUpdateModel The updated outfit
 * @return OK TODO:
 */
export async function updateOutfit(
  client: NobloxClient,
  userOutfitId: number,
  outfitUpdateModel: OutfitUpdateModel
) {
  return await client.http<ApiSuccessResponse>(
    `https://avatar.roblox.com/v1/outfits/${userOutfitId}/update`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        outfitUpdateModel,
      },
    }
  )
}
