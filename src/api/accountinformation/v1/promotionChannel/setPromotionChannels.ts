import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Update the user's promotion channels
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The {Roblox.AccountInformation.Api.Models.PromotionChannelsRequest}
 * @return OK TODO:
 */
export async function setPromotionChannels(client: NobloxClient, request: PromotionChannelsRequest) {
  return await client.http<{}>(`https://accountinformation.roblox.com/v1/promotion-channels`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
