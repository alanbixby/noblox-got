import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Checks if it is possible to send a verification message for the provided credentials.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestCredentialType Credentials type {Roblox.Platform.Authentication.CredentialsType}.
 * @param requestCredentialValue Credentials value.
 * @param requestPassword Credentials password.
 * @return OK TODO:
 */
export async function canSendCredentialsVerificationMessage(
  client: NobloxClient,
  requestCredentialType?: 'Email' | 'Username' | 'PhoneNumber' | 'AuthToken',
  requestCredentialValue?: string,
  requestPassword?: string
) {
  return await client.http<CanSendCredentialsVerificationMessageResponse>(
    `https://auth.roblox.com/v2/credentials/verification`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
        isRatelimited: true,
      },
      searchParams: {
        'request.credentialType': requestCredentialType,
        'request.credentialValue': requestCredentialValue,
        'request.password': requestPassword,
      },
    }
  )
}
