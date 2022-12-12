import { NobloxClient } from '../../../../client/noblox.js'

/**
 * @deprecated Use https://games.roblox.com/docs#!/Votes/get_v1_games_votes instead
 * ✅ Get the game vote status
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The id of the universe we get vote status from.
 * @return Get the game vote status successfully.
 */
export async function getGameVoteStatus(client: NobloxClient, universeId: number) {
  return await client.http<GameVoteResponse>(`https://games.roblox.com/v1/games/${universeId}/votes`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
      isRatelimited: true,
    },
  })
}
