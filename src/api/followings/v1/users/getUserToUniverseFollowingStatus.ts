import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets the status of a following relationship between a user and a universe.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param universeId TODO: DESCRIPTION HERE
 * @return The status of the following relationship.
 */
export async function getUserToUniverseFollowingStatus(
  client: NobloxClient,
  userId: number,
  universeId: number
) {
  return await client.http<UserFollowingUniverseStatusResponse>(
    `https://followings.roblox.com/v1/users/${userId}/universes/${universeId}/status`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
