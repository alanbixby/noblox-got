import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Token Exchange endpoint to exchange 'code' parameter for QQ voucher (containing QQ user info) and user id if one exists
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.Authentication.Api.Models.TencentTokenExchangeRequest}
 * @return OK TODO:
 */
export async function qqCallback(client: NobloxClient, request: TencentTokenExchangeRequest) {
  return await client.http<TencentAuthResponse>(`https://auth.roblox.com/v1/qq/callback`, {
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
