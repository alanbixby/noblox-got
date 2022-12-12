import { Transaction } from '../client/index.js'
import { getCursorUpdatesIterable } from '../pageUpdateIterators/cursorUpdateIterator'

type TransactionTypes =
  | 'Sale'
  | 'Purchase'
  | 'AffiliateSale'
  | 'Devex'
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
  | 'CSAdjustment'

export async function getUserTransactionsIterable(userId: number, transactionType: TransactionTypes) {
  return getCursorUpdatesIterable<Transaction>(`https://economy.roblox.com/v2/users/${userId}/transactions`, {
    authenticationLevel: 'PROTECTED',
    searchParams: {
      limit: 100,
      transactionType,
    },
  })
}

// Example
// for await (const t of await getUserTransactionsIterable(3187412077, 'Purchase')) {
//   console.log(t)
// }
