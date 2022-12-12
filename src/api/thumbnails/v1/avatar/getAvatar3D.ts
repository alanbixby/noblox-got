import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get Avatar 3d object for a user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId user Id for avatar
 * @return OK TODO:
 */
export async function getAvatar3D(client: NobloxClient, userId: number) {
  return await client.http<ThumbnailResponse>(`https://thumbnails.roblox.com/v1/users/avatar-3d`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      userId,
    },
  })
}
