import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * 🔒 Gets the total number of pending trades for the authenticated user.
Inbound is the only accepted tradeStatusType.
      * 
 * @param client the inherited http client and noblox wrapper class
 * @param tradeStatusType The trade status type to fetch a total count for.
 * @return OK TODO:
      */
export async function getTradeCount(
  client: NobloxClient,
  tradeStatusType: 'Inbound' | 'Outbound' | 'Completed' | 'Inactive'
) {
  return await client.http<TradeCountResponse>(
    `https://trades.roblox.com/v1/trades/${tradeStatusType}/count`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
