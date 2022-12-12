import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets metadata needed for the password reset view.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestTargetType The {Roblox.Authentication.Api.Models.GetPasswordResetMetadataRequest.TargetType}
 * @param requestTicket The ticket that was generated when the reset password request was sent
 * @return OK TODO:
 */
export async function getPasswordResetMetadata(
  client: NobloxClient,
  requestTargetType?: 'Email' | 'PhoneNumber',
  requestTicket?: string
) {
  return await client.http<PasswordResetMetadataResponse>(`https://auth.roblox.com/v2/passwords/reset`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
    },
    searchParams: {
      'request.targetType': requestTargetType,
      'request.ticket': requestTicket,
    },
  })
}
