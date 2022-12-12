import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get metadata.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param apiKey TODO: DESCRIPTION HERE
 * @param getIdentifier TODO: DESCRIPTION HERE
 * @param appType TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function qqMetadata(
  client: NobloxClient,
  apiKey?: string,
  getIdentifier?: boolean,
  appType?: string
) {
  return await client.http<TencentMetadataResponse>(`https://auth.roblox.com/v1/qq/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      apiKey,
      getIdentifier,
      appType,
    },
  })
}
