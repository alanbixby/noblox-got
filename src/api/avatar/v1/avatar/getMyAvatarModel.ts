import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Returns details about the authenticated user's avatar
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getMyAvatarModel(client: NobloxClient) {
  return await client.http<AvatarModel>(`https://avatar.roblox.com/v1/avatar`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
