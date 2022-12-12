import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Returns metadata used by the avatar page of the website
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getAvatarMetaData(client: NobloxClient) {
  return await client.http<AvatarMetadataModel>(`https://avatar.roblox.com/v1/avatar/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
