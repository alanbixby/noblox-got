import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of universe playability statuses for the authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
 * @return Get the playability statuses successfully.
 */
export async function multiUniversePlayabilityStatus(client: NobloxClient, universeIds: number[]) {
  return await client.http<PlayabilityStatusResponse[]>(
    `https://games.roblox.com/v1/games/multiget-playability-status`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        universeIds,
      },
    }
  )
}
