import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Verifies a password reset challenge solution.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The request model containing the nonce and the solution. {Roblox.Authentication.Api.Models.PasswordResetVerificationRequest}
 * @return Verification succeeded.
 */
export async function verifyPasswordReset(client: NobloxClient, request: PasswordResetVerificationRequest) {
  return await client.http<PasswordResetVerificationResponse>(
    `https://auth.roblox.com/v2/passwords/reset/verify`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        request,
      },
    }
  )
}
