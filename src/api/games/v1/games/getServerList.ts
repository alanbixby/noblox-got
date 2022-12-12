import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get the game server list
 *
 * @param client the inherited http client and noblox wrapper class
 * @param placeId The Id of the place we are geting the server list for.
 * @param serverType The type of the server we geting the server list for.
 * @param sortOrder The order the results are sorted in.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return Get the game server list successfully.
 */
export async function getServerList(
  client: NobloxClient,
  placeId: number,
  serverType: 'Public' | 'Friend' | 'VIP',
  sortOrder: 'Asc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<GameServerResponse[]>(
    `https://games.roblox.com/v1/games/${placeId}/servers/${serverType}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        sortOrder,
        limit,
        cursor,
      },
    }
  )
}
