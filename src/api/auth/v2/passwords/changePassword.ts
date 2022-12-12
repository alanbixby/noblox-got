import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Changes the password for the authenticated user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The request model including the current password, and the new password.
 * @return Password successfully changed.
 */
export async function changePassword(client: NobloxClient, request: PasswordChangeModel) {
  return await client.http<{}>(`https://auth.roblox.com/v2/user/passwords/change`, {
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
