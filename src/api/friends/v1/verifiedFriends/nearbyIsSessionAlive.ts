import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Checks if session is still alive
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function nearbyIsSessionAlive(client: NobloxClient) {
  return await client.http<{}>(`https://friends.roblox.com/v1/friends/verified/nearby/health`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
      isRatelimited: true,
    },
  })
}
