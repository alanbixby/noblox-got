import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Search for groups by keyword.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param keyword The keyword or phrase to use as the search parameter.
 * @param prioritizeExactMatch Whether or not to prioritize the exact match for the keyword (optional, defaults to false.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function searchGroups(
  client: NobloxClient,
  keyword: string,
  prioritizeExactMatch?: boolean,
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<GroupSearchPageResponse>(`https://groups.roblox.com/v1/groups/search`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      keyword,
      prioritizeExactMatch,
      limit,
      cursor,
    },
  })
}
