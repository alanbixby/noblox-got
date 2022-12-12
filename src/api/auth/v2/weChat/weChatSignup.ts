import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Endpoint for signing up a new wechat user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function weChatSignup(client: NobloxClient, request: WeChatSignupRequest) {
  return await client.http<WeChatSignupResponse>(`https://auth.roblox.com/v2/wechat/signup`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
