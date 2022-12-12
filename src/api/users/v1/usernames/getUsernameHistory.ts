import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Retrieves the username history for a particular user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 * @return OK TODO:
 */
export async function getUsernameHistory(
  client: NobloxClient,
  userId: number,
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string,
  sortOrder: 'Asc' | 'Desc' = 'Asc'
) {
  return await client.http<UsernameHistoryResponse[]>(
    `https://users.roblox.com/v1/users/${userId}/username-history`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        limit,
        cursor,
        sortOrder,
      },
    }
  )
}
