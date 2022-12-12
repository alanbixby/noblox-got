import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get metadata for forgot endpoints
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getMetadata(client: NobloxClient) {
  return await client.http<RecoveryMetadataResponse>(`https://auth.roblox.com/v1/recovery/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
