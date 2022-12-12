import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Endpoint for signing up a new wechat user with a Display Name and no Password
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {!:TencentSignUpWithOutPasswordRequest}
 * @return OK TODO:
 */
export async function wechatSignupWithoutPassword(
  client: NobloxClient,
  request: TencentSignupWithoutPasswordRequest
) {
  return await client.http<SignupResponse>(`https://auth.roblox.com/v1/wechat/signupwithoutpassword`, {
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
