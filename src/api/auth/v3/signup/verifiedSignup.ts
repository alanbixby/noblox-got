import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🤖 Endpoint for signing up a new verified user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.Authentication.Api.Models.VerifiedSignupV3Request}
 * @return Successful signup
 */
export async function verifiedSignup(client: NobloxClient, request: VerifiedSignupV3Request) {
  return await client.http<SignupResponse>(`https://auth.roblox.com/v3/signup/verified`, {
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
