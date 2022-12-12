import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the current status of recovery codes for a user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID.
 * @return OK TODO:
 */
export async function getRecoveryCodesStatus(client: NobloxClient, userId: number) {
  return await client.http<RecoveryCodesStatusResponse>(
    `https://twostepverification.roblox.com/v1/users/${userId}/recovery-codes`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
