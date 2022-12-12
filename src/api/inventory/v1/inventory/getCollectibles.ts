import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets all collectible assets owned by the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The userid of the owner of the collectibles.
 * @param assetType The asset type for the collectibles you're trying to get.
 * @param sortOrder Sorted by userAssetId
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return Collectibles owned by user
 */
export async function getCollectibles(
  client: NobloxClient,
  userId: number,
  assetType?:
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
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<CollectibleUserAssetModel[]>(
    `https://inventory.roblox.com/v1/users/${userId}/assets/collectibles`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
      searchParams: {
        assetType,
        sortOrder,
        limit,
        cursor,
      },
    }
  )
}
