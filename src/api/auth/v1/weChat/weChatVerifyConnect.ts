import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Endpoint for verifying a wechat account connection to an existing Roblox user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function weChatVerifyConnect(client: NobloxClient, request: TencentVerifyConnectRequest) {
  return await client.http<{}>(`https://auth.roblox.com/v1/wechat/verify-connect`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      request,
    },
  })
}
