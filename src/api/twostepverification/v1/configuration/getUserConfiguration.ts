import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets two step verification configuration for the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The Id of the user to get the configuration for.
 * @param challengeId The active challenge for the user (as an alternative when the user is unauthenticated).
 * @param actionType The action type the {challengeId} is associated with.
 * @return OK TODO:
 */
export async function getUserConfiguration(
  client: NobloxClient,
  userId: number,
  challengeId?: string,
  actionType?: 'Unknown' | 'Login'
) {
  return await client.http<UserConfiguration>(
    `https://twostepverification.roblox.com/v1/users/${userId}/configuration`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
      searchParams: {
        challengeId,
        actionType,
      },
    }
  )
}
