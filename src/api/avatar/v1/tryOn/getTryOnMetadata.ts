import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Try-on related-metadata endpoint
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getTryOnMetadata(client: NobloxClient) {
  return await client.http<TryOnMetadataModel>(`https://avatar.roblox.com/v1/try-on/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
