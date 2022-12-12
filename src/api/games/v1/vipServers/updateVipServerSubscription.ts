import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates subscription status of a vip server
 *
 * @param client the inherited http client and noblox wrapper class
 * @param id The VIP Server ID
 * @param request The {Roblox.Games.Api.VipServerUpdateSubscriptionRequest}
 * @return OK TODO:
 */
export async function updateVipServerSubscription(
  client: NobloxClient,
  id: number,
  request: VipServerUpdateSubscriptionRequest
) {
  return await client.http<VipServerSubscriptionResponse>(
    `https://games.roblox.com/v1/vip-servers/${id}/subscription`,
    {
      method: 'PATCH',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
      json: {
        request,
      },
    }
  )
}
