import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets metadata about the trade system.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function metadata(client: NobloxClient) {
  return await client.http<TradeMetadata>(`https://trades.roblox.com/v1/trades/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
