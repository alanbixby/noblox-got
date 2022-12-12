import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Enables two step verification via email for the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID.
 * @return OK TODO:
 */
export async function enableTwoStepVerification(client: NobloxClient, userId: number) {
  return await client.http<{}>(
    `https://twostepverification.roblox.com/v1/users/${userId}/configuration/email/enable`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
