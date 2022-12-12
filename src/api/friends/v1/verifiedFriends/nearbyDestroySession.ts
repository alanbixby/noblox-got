import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Removes session for authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function nearbyDestroySession(client: NobloxClient) {
  return await client.http<{}>(`https://friends.roblox.com/v1/friends/verified/nearby/session`, {
    method: 'DELETE',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
  })
}
