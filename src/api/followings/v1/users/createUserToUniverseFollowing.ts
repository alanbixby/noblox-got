import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Creates the following between a user with {userId} and universe with {universeId}
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param universeId TODO: DESCRIPTION HERE
 * @return The created following.
 */
export async function createUserToUniverseFollowing(
  client: NobloxClient,
  userId: number,
  universeId: number
) {
  return await client.http<UserFollowingUniverseResponse>(
    `https://followings.roblox.com/v1/users/${userId}/universes/${universeId}`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
