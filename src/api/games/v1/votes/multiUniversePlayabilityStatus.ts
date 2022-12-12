import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of universe vote status
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeIds A list of universe Ids. Cannot exceed a maximum of 100 IDs.
 * @return Get the vote status successfully.
 */
export async function multiUniversePlayabilityStatus(client: NobloxClient, universeIds: number[]) {
  return await client.http<GameVoteResponse[]>(`https://games.roblox.com/v1/games/votes`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
      isRatelimited: true,
    },
    searchParams: {
      universeIds,
    },
  })
}
