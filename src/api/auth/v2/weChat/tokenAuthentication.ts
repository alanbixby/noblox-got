import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Token Authentication Endpoint for Mobile
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request TODO: DESCRIPTION HERE
 * @param apiKey TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function tokenAuthentication(
  client: NobloxClient,
  request: WeChatTokenAuthenticationRequest,
  apiKey?: string
) {
  return await client.http<WeChatAuthResponse>(`https://auth.roblox.com/v2/wechat/token-authentication`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
    searchParams: {
      apiKey,
    },
  })
}
