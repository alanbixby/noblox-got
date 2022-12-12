import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Disables two step verification via email for the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID.
 * @param request The {Roblox.TwoStepVerification.Api.DisableTwoStepVerificationRequest}.
 * @return OK TODO:
 */
export async function disableTwoStepVerification(
  client: NobloxClient,
  userId: number,
  request: DisableTwoStepVerificationRequest
) {
  return await client.http<{}>(
    `https://twostepverification.roblox.com/v1/users/${userId}/configuration/email/disable`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
      json: {
        request,
      },
    }
  )
}
