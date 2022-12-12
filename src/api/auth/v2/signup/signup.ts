import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🤖 Endpoint for signing up a new user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.Authentication.Api.Models.SignupRequest}
 * @return Successful signup
 */
export async function signup(client: NobloxClient, request: SignupRequest) {
  return await client.http<SignupResponse>(`https://auth.roblox.com/v2/signup`, {
    method: 'POST',
    context: {
      authenticationLevel: 'CAPTCHA',
      isRatelimited: true,
    },
    json: {
      request,
    },
  })
}
