import { AuthenticationLevels } from './http.js'
import { Transaction } from './index.js'
import { getCursorUpdatesIterable } from './pageUpdateIterators/cursorUpdateIterator'

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

interface Test {
  transactionId: number
  isPending: boolean
  debugging: boolean
}

export async function getUserTransactionsIterable(userId: number, transactionType: TransactionTypes) {
  return getCursorUpdatesIterable<Transaction>(`https://economy.roblox.com/v2/users/${userId}/transactions`, {
    authenticationLevel: AuthenticationLevels.PROTECTED,
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
