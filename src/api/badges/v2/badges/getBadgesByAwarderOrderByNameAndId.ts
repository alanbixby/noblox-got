import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets badges by their awarding game.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The universe Id.
 * @param sortOrder The order the results are sorted in.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getBadgesByAwarderOrderByNameAndId(
  client: NobloxClient,
  universeId: number,
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<BadgeResponse[]>(`https://badges.roblox.com/v2/universes/${universeId}/badges`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      sortOrder,
      limit,
      cursor,
    },
  })
}
