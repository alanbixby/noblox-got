import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Verifies a two step verification challenge code via authenticator app.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID.
 * @param request The {Roblox.TwoStepVerification.Api.VerifyCodeRequest}.
 * @return OK TODO:
 */
export async function verifyCode(client: NobloxClient, userId: number, request: VerifyCodeRequest) {
  return await client.http<VerifyCodeResponse>(
    `https://twostepverification.roblox.com/v1/users/${userId}/challenges/authenticator/verify`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
      json: {
        request,
      },
    }
  )
}
