import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Check if the current user has an Xbox connected.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getConnection(client: NobloxClient) {
  return await client.http<XboxConnectionModel>(`https://auth.roblox.com/v1/xbox/connection`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
