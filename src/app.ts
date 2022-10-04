import 'dotenv/config'
import got from 'got'
import { Transaction, TransactionsResponse } from '.'

type TransactionTypes = 'sale' | 'purchase' | 'affiliatesale' | 'devex' | 'grouppayout' | 'adimpressionpayout'

export async function getUserTransactionsIterable(
  userId: number,
  transactionType: TransactionTypes = 'sale'
) {
  let currentPage = new Set<number>()
  let lastPage = new Set<number>([-1])
  let reset = false
  return got.paginate<Transaction, TransactionsResponse>(
    `https://economy.roblox.com/v2/users/${userId}/transactions`,
    {
      searchParams: {
        limit: 10,
        transactionType,
      },
      headers: {
        Cookie: `.ROBLOSECURITY=${process.env.ROBLOX_COOKIE_MAIN as string}`,
        'User-Agent': 'noblox.js-got API wrapper',
      },
      responseType: 'json',
      pagination: {
        paginate: function ({ response }) {
          console.count(response.requestUrl.search)
          if (!response.body.previousPageCursor) {
            currentPage = new Set(response.body.data.map((t) => t.id))
          }
          let cursor = response.body.nextPageCursor
          if (reset || !response.body.nextPageCursor) {
            lastPage = currentPage
            cursor = undefined
          }
          reset = false
          return {
            searchParams: {
              cursor,
            },
          }
        },
        transform: (response) => response.body.data,
        filter: ({ item }) => {
          if (lastPage.has(-1) || lastPage.has(item.id)) {
            reset = true
            return false
          }
          return true
        },
        backoff: 2 * 1000,
      },
    }
  )
}

for await (const t of await getUserTransactionsIterable(5903228, 'purchase')) {
  console.log(t)
}
