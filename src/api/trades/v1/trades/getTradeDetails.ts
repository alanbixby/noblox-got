import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets detailed information about a trade.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param tradeId The trade id.
 * @return OK TODO:
 */
export async function getTradeDetails(client: NobloxClient, tradeId: number) {
  return await client.http<TradeDetailResponse>(`https://trades.roblox.com/v1/trades/${tradeId}`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
