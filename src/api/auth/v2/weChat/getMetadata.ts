import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get metadata.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param apiKey TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getMetadata(client: NobloxClient, apiKey?: string) {
  return await client.http<WeChatMetadataResponse>(`https://auth.roblox.com/v2/wechat/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      apiKey,
    },
  })
}
