import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Checks if a username is valid.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The {Roblox.Authentication.Api.Models.UsernameValidationRequest}.
 * @return Success
 */
export async function validateFromBody(client: NobloxClient, request: UsernameValidationRequest) {
  return await client.http<UsernameValidationResponse>(`https://auth.roblox.com/v2/usernames/validate`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
