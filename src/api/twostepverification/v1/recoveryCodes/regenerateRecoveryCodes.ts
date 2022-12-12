import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Clears any existing recovery codes and generates a new batch of recovery codes.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID to generate recovery codes for.
 * @param request The {Roblox.TwoStepVerification.Api.RegenerateRecoveryCodesRequest}.
 * @return OK TODO:
 */
export async function regenerateRecoveryCodes(
  client: NobloxClient,
  userId: number,
  request: RegenerateRecoveryCodesRequest
) {
  return await client.http<RegenerateRecoveryCodesResponse>(
    `https://twostepverification.roblox.com/v1/users/${userId}/recovery-codes/regenerate`,
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
