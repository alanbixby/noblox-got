import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Declines a trade.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param tradeId The trade id.
 * @return OK TODO:
 */
export async function declineTrade(client: NobloxClient, tradeId: number) {
  return await client.http<{}>(`https://trades.roblox.com/v1/trades/${tradeId}/decline`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
