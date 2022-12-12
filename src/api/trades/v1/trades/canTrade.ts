import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Returns whether you can trade with another user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The other user's id.
 * @return OK TODO:
 */
export async function canTrade(client: NobloxClient, userId: number) {
  return await client.http<CanTradeResponse>(`https://trades.roblox.com/v1/users/${userId}/can-trade-with`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
