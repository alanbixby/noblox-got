import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets all universes followed by a user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID.
 * @return Data model containing map of (universe ID =&gt; follow date).
 */
export async function getUniversesFollowedByUserAsync(client: NobloxClient, userId: number) {
  return await client.http<FollowsByTypeResponse>(
    `https://followings.roblox.com/v2/users/${userId}/universes`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
