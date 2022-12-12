import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Returns details about a specified user's avatar
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getAvatarModel(client: NobloxClient, userId: number) {
  return await client.http<AvatarModel>(`https://avatar.roblox.com/v1/users/${userId}/avatar`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
