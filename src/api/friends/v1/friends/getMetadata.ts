import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ TODO: DESCRIPTION HERE
 *
 * @param client the inherited http client and noblox wrapper class
 * @param targetUserId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getMetadata(client: NobloxClient, targetUserId?: number) {
  return await client.http<FriendsPageMetadataResponse>(`https://friends.roblox.com/v1/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      targetUserId,
    },
  })
}
