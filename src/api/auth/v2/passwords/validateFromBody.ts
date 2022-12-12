import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Endpoint for checking if a password is valid.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The {Roblox.Authentication.Api.Models.PasswordValidationModel}.
 * @return Success
 */
export async function validateFromBody(client: NobloxClient, request: PasswordValidationModel) {
  return await client.http<PasswordValidationResponse>(`https://auth.roblox.com/v2/passwords/validate`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
