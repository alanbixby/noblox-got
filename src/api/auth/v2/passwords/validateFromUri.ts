import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Endpoint for checking if a password is valid.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestUsername The username.
 * @param requestPassword The password.
 * @return Success
 */
export async function validateFromUri(
  client: NobloxClient,
  requestUsername?: string,
  requestPassword?: string
) {
  return await client.http<PasswordValidationResponse>(`https://auth.roblox.com/v2/passwords/validate`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      'request.username': requestUsername,
      'request.password': requestPassword,
    },
  })
}
