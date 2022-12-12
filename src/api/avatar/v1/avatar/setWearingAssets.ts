import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sets the avatar's current assets to the list
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetIdsModel The list of asset IDs
 * @return OK TODO:
 */
export async function setWearingAssets(client: NobloxClient, assetIdsModel: AssetIdListModel) {
  return await client.http<WearResponseModel>(`https://avatar.roblox.com/v1/avatar/set-wearing-assets`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      assetIdsModel,
    },
  })
}
