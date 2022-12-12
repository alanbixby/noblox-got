import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sends a trade.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param tradeRequest The trade request.
 * @return OK TODO:
 */
export async function sendTrade(client: NobloxClient, tradeRequest: TradeRequest) {
  return await client.http<NewTradeResponse>(`https://trades.roblox.com/v1/trades/send`, {
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
