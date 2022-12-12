import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get Chat metadata.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getMetadata(client: NobloxClient) {
  return await client.http<ChatMetadataResponse>(`https://chat.roblox.com/v2/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
