import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Get or Create a session for authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function nearbyGetOrCreateSession(client: NobloxClient) {
  return await client.http<NearbySessionResponseModel>(
    `https://friends.roblox.com/v1/friends/verified/nearby/session`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
    }
  )
}
