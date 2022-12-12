import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 An endpoint to check if captcha is needed for an upload of the given asset type
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetType TODO: DESCRIPTION HERE
 * @param groupId TODO: DESCRIPTION HERE
 * @param captchaTokenRequest TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function isCaptchaNeeded(
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
  groupId: number,
  captchaTokenRequest: CaptchaTokenRequest
) {
  return await client.http<AvatarAssetUploadCaptchaCheckResponse>(
    `https://itemconfiguration.roblox.com/v1/avatar-assets/${assetType}/upload-captcha-test`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        captchaTokenRequest,
      },
      searchParams: {
        groupId,
      },
    }
  )
}
