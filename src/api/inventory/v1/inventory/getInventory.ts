import { NobloxClient } from '../../../../client/noblox.js'

/** 
 * @deprecated This endpoint is not supporting exclusive start id paging. Use corresponding endpoint on www instead (a temporary workaround).
      * ✅ Gets a list of assets by type for the specified user.
Note that the 'Hat' asset type may return accessories while we are migrating.
      * 
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user identifier.
 * @param assetType The asset type.
 * @param pageNumber The start index.
 * @param itemsPerPage The max number of items that can be returned.
 * @param keyword Filter results for items containing this.
 * @return OK TODO:
      */
export async function getInventory(
  client: NobloxClient,
  userId: number,
  assetType:
    | 'Image'
    | 'TShirt'
    | 'Audio'
    | 'Mesh'
    | 'Lua'
    | 'HTML'
    | 'Text'
    | 'Hat'
    | 'Place'
    | 'Model'
    | 'Shirt'
    | 'Pants'
    | 'Decal'
    | 'Avatar'
    | 'Head'
    | 'Face'
    | 'Gear'
    | 'Badge'
    | 'GroupEmblem'
    | 'Animation'
    | 'Arms'
    | 'Legs'
    | 'Torso'
    | 'RightArm'
    | 'LeftArm'
    | 'LeftLeg'
    | 'RightLeg'
    | 'Package'
    | 'YouTubeVideo'
    | 'GamePass'
    | 'App'
    | 'Code'
    | 'Plugin'
    | 'SolidModel'
    | 'MeshPart'
    | 'HairAccessory'
    | 'FaceAccessory'
    | 'NeckAccessory'
    | 'ShoulderAccessory'
    | 'FrontAccessory'
    | 'BackAccessory'
    | 'WaistAccessory'
    | 'ClimbAnimation'
    | 'DeathAnimation'
    | 'FallAnimation'
    | 'IdleAnimation'
    | 'JumpAnimation'
    | 'RunAnimation'
    | 'SwimAnimation'
    | 'WalkAnimation'
    | 'PoseAnimation'
    | 'LocalizationTableManifest'
    | 'LocalizationTableTranslation'
    | 'EmoteAnimation'
    | 'Video'
    | 'TexturePack',
  pageNumber?: number,
  itemsPerPage?: number,
  keyword?: string
) {
  return await client.http<InventoryPageResponse>(
    `https://inventory.roblox.com/v1/users/${userId}/inventory/${assetType}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        pageNumber,
        itemsPerPage,
        keyword,
      },
    }
  )
}
