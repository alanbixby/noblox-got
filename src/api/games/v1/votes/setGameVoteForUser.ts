import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Set the user's vote for a game
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The id of the universe.
 * @param requestBody The request body.
 * @return Set the user's vote for the game successfully.
 */
export async function setGameVoteForUser(
  client: NobloxClient,
  universeId: number,
  requestBody: SetUserGameVoteRequest
) {
  return await client.http<{}>(`https://games.roblox.com/v1/games/${universeId}/user-votes`, {
    method: 'PATCH',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      requestBody,
    },
  })
}
