import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Creates a new outfit.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param outfitUpdateModel The new outfit
 * @return OK TODO:
 */
export async function createOutfit(client: NobloxClient, outfitUpdateModel: OutfitUpdateModel) {
  return await client.http<ApiSuccessResponse>(`https://avatar.roblox.com/v1/outfits/create`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      outfitUpdateModel,
    },
  })
}
