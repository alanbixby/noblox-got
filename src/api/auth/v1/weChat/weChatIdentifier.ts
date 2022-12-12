import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get WeChat Tencent Identifier
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function weChatIdentifier(client: NobloxClient) {
  return await client.http<unknown>(`https://auth.roblox.com/v1/wechat/tencent-id`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
