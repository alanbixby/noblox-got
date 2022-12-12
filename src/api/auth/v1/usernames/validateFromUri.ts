import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Checks if a username is valid.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestUsername The username
 * @param requestBirthday The birthday
 * @param requestContext {Roblox.Authentication.Api.Models.UsernameValidationContext}
 * @return Success
 */
export async function validateFromUri(
  client: NobloxClient,
  requestUsername?: string,
  requestBirthday?: Date | string,
  requestContext?: 'Unknown' | 'Signup' | 'UsernameChange'
) {
  if 
  return await client.http<UsernameValidationResponse>(`https://auth.roblox.com/v1/usernames/validate`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      'request.username': requestUsername,
      'request.birthday': requestBirthday,
      'request.context': requestContext,
    },
  })
}
