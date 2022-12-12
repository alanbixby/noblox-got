import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sends a verification message to the provided credentials.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request Request model with a credential value, type, and password.
 * @return OK TODO:
 */
export async function sendCredentialsVerificationMessage(
  client: NobloxClient,
  request: SendCredentialsVerificationMessageRequest
) {
  return await client.http<{}>(`https://auth.roblox.com/v1/credentials/verification/send`, {
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
