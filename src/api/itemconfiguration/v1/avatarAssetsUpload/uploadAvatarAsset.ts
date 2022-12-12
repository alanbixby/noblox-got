import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🤖 Attempts to upload the new asset and charges any upload fees necessary in the process
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetType The asset type being uploaded
 * @param requestModelFiles TODO: DESCRIPTION HERE
 * @return A model containing information about the amount of Robux paid and the new asset's Id
 */
export async function uploadAvatarAsset(
  client: NobloxClient,
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
  requestModelFiles?: fs.ReadStream
) {
  return await client.http<UploadAvatarAssetResponse>(
    `https://itemconfiguration.roblox.com/v1/avatar-assets/${assetType}/upload`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'CAPTCHA',
      },
      form: {
        'requestModel.files': requestModelFiles,
      },
    }
  )
}
