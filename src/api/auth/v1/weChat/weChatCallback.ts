import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Token Exchange endpoint to exchange 'code' parameter for WeChat voucher (containing WeChat user info) and user id if one exists
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.Authentication.Api.Models.WeChatTokenExchangeRequest}
 * @return OK TODO:
 */
export async function weChatCallback(client: NobloxClient, request: TencentTokenExchangeRequest) {
  return await client.http<TencentAuthResponse>(`https://auth.roblox.com/v1/wechat/callback`, {
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
