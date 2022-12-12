import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sends a password reset email or challenge to the specified target.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return The forgot password email successfully sent.
 */
export async function sendResetPasswordPrompted(client: NobloxClient) {
  return await client.http<{}>(`https://auth.roblox.com/v2/passwords/reset/send-prompted`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
