import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Tries to check if an email is valid
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestBodyEmail Gets or sets the email to check for validation
 * @return OK TODO:
 */
export async function isEmailValid(client: NobloxClient, requestBodyEmail?: string) {
  return await client.http<EmailValidationResponse>(`https://auth.roblox.com/v1/validators/email`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      'requestBody.email': requestBodyEmail,
    },
  })
}
