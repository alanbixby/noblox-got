import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Searches for users by keyword.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param keyword The search keyword.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function searchUsers(
  client: NobloxClient,
  keyword: string,
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<UserSearchUserResponse[]>(`https://users.roblox.com/v1/users/search`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
      isRatelimited: true,
    },
    searchParams: {
      keyword,
      limit,
      cursor,
    },
  })
}
