import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Clears any existing recovery codes for the user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID.
 * @param request The {Roblox.TwoStepVerification.Api.ClearRecoveryCodesRequest}.
 * @return OK TODO:
 */
export async function clearRecoveryCodes(
  client: NobloxClient,
  userId: number,
  request: ClearRecoveryCodesRequest
) {
  return await client.http<{}>(
    `https://twostepverification.roblox.com/v1/users/${userId}/recovery-codes/clear`,
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
