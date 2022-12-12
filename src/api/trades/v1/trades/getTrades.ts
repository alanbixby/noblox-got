import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Fetches a list of the authenticated user's trades.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param tradeStatusType The trade status type.
 * @param sortOrder Sorted by trade creation date
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getTrades(
  client: NobloxClient,
  tradeStatusType: 'Inbound' | 'Outbound' | 'Completed' | 'Inactive',
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<TradeResponse[]>(`https://trades.roblox.com/v1/trades/${tradeStatusType}`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
    searchParams: {
      sortOrder,
      limit,
      cursor,
    },
  })
}
