import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates vip server
 *
 * @param client the inherited http client and noblox wrapper class
 * @param id The VIP Server ID
 * @param request The {Roblox.Games.Api.VipServerUpdateRequest}
 * @return OK TODO:
 */
export async function updateVipServer(client: NobloxClient, id: number, request: VipServerUpdateRequest) {
  return await client.http<VipServerResponse>(`https://games.roblox.com/v1/vip-servers/${id}`, {
    method: 'PATCH',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      request,
    },
  })
}
