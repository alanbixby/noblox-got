import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Counters a trade.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param tradeId The trade id.
 * @param tradeRequest The trade request.
 * @return OK TODO:
 */
export async function counterTrade(client: NobloxClient, tradeId: number, tradeRequest: TradeRequest) {
  return await client.http<NewTradeResponse>(`https://trades.roblox.com/v1/trades/${tradeId}/counter`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      tradeRequest,
    },
  })
}
