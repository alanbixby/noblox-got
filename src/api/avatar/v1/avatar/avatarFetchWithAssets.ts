import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * ✅ This endpoint returns a bunch of data used by client to create the avatar in game.  
It's a replacement for Avatar-fetch v1.1
The difference from AvatarFetch is that we take the avatar's scaling (not the universe's) and we return
a collection of asset type and asset ids instead of asset version ids
      * 
 * @param client the inherited http client and noblox wrapper class
 * @param placeId TODO: DESCRIPTION HERE
 * @param userId TODO: DESCRIPTION HERE
 * @return OK TODO:
      */
export async function avatarFetchWithAssets(client: NobloxClient, placeId: number, userId: number) {
  return await client.http<AvatarFetchModel>(`https://avatar.roblox.com/v1/avatar-fetch`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      placeId,
      userId,
    },
  })
}
