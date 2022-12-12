import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Fetches the transaction history for the authenticated user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param transactionType TODO: DESCRIPTION HERE
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 * @return OK TODO:
 */
export async function getUserTransactions(
  client: NobloxClient,
  userId: number,
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
  return await client.http<TransactionRecordResponse[]>(
    `https://economy.roblox.com/v2/users/${userId}/transactions`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        transactionType,
        limit,
        cursor,
        sortOrder,
      },
    }
  )
}
