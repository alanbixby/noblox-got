import 'dotenv/config'
import { CursorResponse } from '..'
import { nobloxGot, NobloxGotCustomOptions } from '../http.js'

export async function getCursorUpdatesIterable<T>(
  url: string,
  customGotOptions: NobloxGotCustomOptions,
  slowBackoffMs: number = 5 * 1000,
  fastBackoffMs: number = 100
) {
  let currentPage = new Set<string>()
  let lastPage = new Set<string>(['nobloxUninitializedSet'])
  let resetCursor = false
  const shortPollingGot = nobloxGot.extend(customGotOptions)
  return shortPollingGot.paginate<T, CursorResponse<T>>(url, {
    hooks: {
      init: [
        (_, options) => {
          if (options.searchParams.cursor) {
            options.pagination.backoff = fastBackoffMs
          } else {
            options.pagination.backoff = slowBackoffMs
          }
        },
      ],
    },
    pagination: {
      paginate: function ({ response }) {
        if (!response.body.previousPageCursor) {
          currentPage = new Set(response.body.data.map((item) => JSON.stringify(item)))
        }
        let cursor = response.body.nextPageCursor
        if (resetCursor || !response.body.nextPageCursor) {
          lastPage = currentPage
          cursor = undefined
        }
        resetCursor = false
        return {
          searchParams: {
            cursor,
          },
        }
      },
      transform: (response) => response.body.data,
      filter: ({ item }) => {
        if (lastPage.has('nobloxUninitializedSet') || lastPage.has(JSON.stringify(item))) {
          resetCursor = true
          return false
        }
        return true
      },
      requestLimit: Infinity,
    },
  })
}
