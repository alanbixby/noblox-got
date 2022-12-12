import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sets the authenticated user's player avatar type (e.g. R6 or R15).
 *
 * @param client the inherited http client and noblox wrapper class
 * @param playerAvatarTypeModel R6 or R15
 * @return OK TODO:
 */
export async function setAvatarType(client: NobloxClient, playerAvatarTypeModel: PlayerAvatarTypeModel) {
  return await client.http<ApiSuccessResponse>(`https://avatar.roblox.com/v1/avatar/set-player-avatar-type`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      playerAvatarTypeModel,
    },
  })
}
