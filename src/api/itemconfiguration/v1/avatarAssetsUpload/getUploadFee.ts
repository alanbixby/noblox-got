import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Cheaply checking if the upload is guaranteed to fail and getting the price in Robux needed in order to do the upload
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetType The asset type being uploaded
 * @param requestModelFiles TODO: DESCRIPTION HERE
 * @return If the upload would be successful without taking into account upload fees, then a response model is returned with the upload fee information
 */
export async function getUploadFee(
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
  return await client.http<GetAvatarAssetUploadFeeResponse>(
    `https://itemconfiguration.roblox.com/v1/avatar-assets/${assetType}/get-upload-fee`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      form: {
        'requestModel.files': requestModelFiles,
      },
    }
  )
}
