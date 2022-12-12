import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Accepts a trade.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param tradeId The trade id.
 * @return OK TODO:
 */
export async function acceptTrade(client: NobloxClient, tradeId: number) {
  return await client.http<{}>(`https://trades.roblox.com/v1/trades/${tradeId}/accept`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
