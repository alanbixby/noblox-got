import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get metadata for two step verification
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getMetadata(client: NobloxClient) {
  return await client.http<TwoStepVerificationMetadataResponse>(
    `https://auth.roblox.com/v1/twostepverification/metadata`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
