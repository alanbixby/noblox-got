import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Update friend/clan access and allowed friends/clan list
 *
 * @param client the inherited http client and noblox wrapper class
 * @param id The VIP Server ID
 * @param request The {Roblox.Games.Api.VipServerUpdatePermissionsRequest}
 * @return OK TODO:
 */
export async function updateVipServerPermissions(
  client: NobloxClient,
  id: number,
  request: VipServerUpdatePermissionsRequest
) {
  return await client.http<VipServerPermissionsResponse>(
    `https://games.roblox.com/v1/vip-servers/${id}/permissions`,
    {
      method: 'PATCH',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        request,
      },
    }
  )
}
