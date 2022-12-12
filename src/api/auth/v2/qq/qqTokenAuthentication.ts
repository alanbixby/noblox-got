import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Token Authentication Endpoint for Mobile
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.Authentication.Api.Models.TencentTokenAuthenticationRequest}
 * @param apiKey TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function qqTokenAuthentication(
  client: NobloxClient,
  request: QqTokenAuthenticationRequest,
  apiKey?: string
) {
  return await client.http<TencentAuthResponse>(`https://auth.roblox.com/v2/qq/token-authentication`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      request,
    },
    searchParams: {
      apiKey,
    },
  })
}
