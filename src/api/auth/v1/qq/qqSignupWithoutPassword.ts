import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Endpoint for signing up a new QQ user with Display Name and no Password
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.Authentication.Api.Models.TencentSignupWithoutPasswordRequest}
 * @return OK TODO:
 */
export async function qqSignupWithoutPassword(
  client: NobloxClient,
  request: TencentSignupWithoutPasswordRequest
) {
  return await client.http<SignupResponse>(`https://auth.roblox.com/v1/qq/signupwithoutpassword`, {
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
