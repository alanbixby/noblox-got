import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets all the followings between a user with {userId} and universes
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @return A list of user to game followings.
 */
export async function getAllUserToUniverseFollowings(client: NobloxClient, userId: number) {
  return await client.http<UserFollowingUniverseResponse[]>(
    `https://followings.roblox.com/v1/users/${userId}/universes`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
