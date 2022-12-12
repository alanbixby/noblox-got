import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🤖 Sends a password reset email or challenge to the specified target.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The request model containing the target type and a target.
 * @return The forgot password email successfully sent.
 */
export async function sendResetPassword(client: NobloxClient, request: SendResetPasswordRequest) {
  return await client.http<SendResetPasswordResponse>(`https://auth.roblox.com/v2/passwords/reset/send`, {
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
