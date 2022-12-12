import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets recent transaction total summaries for the Authenticated User.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param timeFrame The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
 * @param transactionType TODO: DESCRIPTION HERE
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 * @return OK TODO:
 */
export async function getUserRevenueSummary(
  client: NobloxClient,
  userId: number,
  timeFrame: 'Day' | 'Week' | 'Month' | 'Year',
  transactionType:
    | 'Sale'
    | 'Purchase'
    | 'AffiliateSale'
    | 'DevEx'
    | 'GroupPayout'
    | 'AdImpressionPayout'
    | 'CurrencyPurchase'
    | 'TradeRobux'
    | 'PremiumStipend'
    | 'PendingRobux'
    | 'EngagementPayout'
    | 'GroupEngagementPayout'
    | 'AdSpend'
    | 'Summary'
    | 'IndividualToGroup'
    | 'CSAdjustment',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string,
  sortOrder: 'Asc' | 'Desc' = 'Asc'
) {
  return await client.http<TransactionTotalsResponse>(
    `https://economy.roblox.com/v2/users/${userId}/transaction-totals`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        timeFrame,
        transactionType,
        limit,
        cursor,
        sortOrder,
      },
    }
  )
}
