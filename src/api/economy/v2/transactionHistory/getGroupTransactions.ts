import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Fetches the transaction history for a group.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId TODO: DESCRIPTION HERE
 * @param transactionType TODO: DESCRIPTION HERE
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 * @return OK TODO:
 */
export async function getGroupTransactions(
  client: NobloxClient,
  groupId: number,
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
  return await client.http<TransactionResponse[]>(
    `https://economy.roblox.com/v2/groups/${groupId}/transactions`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
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
