import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Endpoint for connecting a QQ account to an existing Roblox user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.Authentication.Api.Models.TencentConnectRequest}
 * @return OK TODO:
 */
export async function qqConnect(client: NobloxClient, request: TencentConnectRequest) {
  return await client.http<LoginResponse>(`https://auth.roblox.com/v1/qq/connect`, {
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
