import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get the user's vote status for a game
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The id of the universe we get user vote status from.
 * @return Get the user's vote status for a game successfully.
 */
export async function getGameVoteStatusForUser(client: NobloxClient, universeId: number) {
  return await client.http<UserGameVoteResponse>(
    `https://games.roblox.com/v1/games/${universeId}/votes/user`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
        isRatelimited: true,
      },
    }
  )
}
