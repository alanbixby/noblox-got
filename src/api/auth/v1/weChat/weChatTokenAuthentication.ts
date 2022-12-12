import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Token Authentication Endpoint for Mobile
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request TODO: DESCRIPTION HERE
 * @param apiKey TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function weChatTokenAuthentication(
  client: NobloxClient,
  request: TencentTokenAuthenticationRequest,
  apiKey?: string
) {
  return await client.http<TencentAuthResponse>(`https://auth.roblox.com/v1/wechat/token-authentication`, {
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
