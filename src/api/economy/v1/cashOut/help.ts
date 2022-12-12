import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 TODO: DESCRIPTION HERE
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function help(client: NobloxClient) {
  return await client.http<unknown>(`https://economy.roblox.com/v1/developer-exchange/help`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
