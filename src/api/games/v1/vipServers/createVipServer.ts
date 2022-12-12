import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Create VIP server for a game
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The id of the universe.
 * @param requestBody The request body.
 * @return OK TODO:
 */
export async function createVipServer(
  client: NobloxClient,
  universeId: number,
  requestBody: CreateVipServersRequest
) {
  return await client.http<GameServerResponse>(
    `https://games.roblox.com/v1/games/vip-servers/${universeId}`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        requestBody,
      },
    }
  )
}
