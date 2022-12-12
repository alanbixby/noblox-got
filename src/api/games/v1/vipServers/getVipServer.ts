import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Get necessary data to generate webpage
 *
 * @param client the inherited http client and noblox wrapper class
 * @param id The VIP Server ID
 * @return OK TODO:
 */
export async function getVipServer(client: NobloxClient, id: number) {
  return await client.http<VipServerResponse>(`https://games.roblox.com/v1/vip-servers/${id}`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
    },
  })
}
