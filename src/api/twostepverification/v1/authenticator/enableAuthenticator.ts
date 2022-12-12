import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Initiates enabling authenticator-based two step verification for the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID.
 * @return OK TODO:
 */
export async function enableAuthenticator(client: NobloxClient, userId: number) {
  return await client.http<EnableAuthenticatorResponse>(
    `https://twostepverification.roblox.com/v1/users/${userId}/configuration/authenticator/enable`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
