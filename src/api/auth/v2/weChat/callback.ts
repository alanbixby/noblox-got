import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Token Exchange endpoint to exchange 'code' parameter for WeChat voucher (containing WeChat user info) and user id if one exists
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.Authentication.Api.Models.WeChatTokenExchangeRequest}
 * @return OK TODO:
 */
export async function callback(client: NobloxClient, request: WeChatTokenExchangeRequest) {
  return await client.http<WeChatAuthResponse>(`https://auth.roblox.com/v2/wechat/callback`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
