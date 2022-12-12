import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Finishes enabling authenticator-based two step verification for the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID.
 * @param request The {Roblox.TwoStepVerification.Api.EnableVerifyAuthenticatorRequest}.
 * @return OK TODO:
 */
export async function enableVerifyAuthenticator(
  client: NobloxClient,
  userId: number,
  request: EnableVerifyAuthenticatorRequest
) {
  return await client.http<{}>(
    `https://twostepverification.roblox.com/v1/users/${userId}/configuration/authenticator/enable-verify`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        request,
      },
    }
  )
}
