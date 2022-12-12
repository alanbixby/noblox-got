import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets details about the contents of an outfit.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userOutfitId The user outfit id.
 * @return OK TODO:
 */
export async function getOutfitDetailsModel(client: NobloxClient, userOutfitId: number) {
  return await client.http<OutfitDetailsModel>(
    `https://avatar.roblox.com/v1/outfits/${userOutfitId}/details`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
