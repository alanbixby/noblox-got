import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Resets a password for a user that belongs to the password reset ticket.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The request model including the target type, ticket, user id, and new password, {Roblox.Authentication.Api.Models.PasswordResetModel}
 * @return The password was successfully reset.
 */
export async function resetPassword(client: NobloxClient, request: PasswordResetModel) {
  return await client.http<LoginResponse>(`https://auth.roblox.com/v2/passwords/reset`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
