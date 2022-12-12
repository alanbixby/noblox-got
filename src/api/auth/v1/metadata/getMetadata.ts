import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get the metadata
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getMetadata(client: NobloxClient) {
  return await client.http<MetadataResponse>(`https://auth.roblox.com/v1/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
