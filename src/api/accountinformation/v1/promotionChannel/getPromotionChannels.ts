import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get the user's promotion channels
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getPromotionChannels(client: NobloxClient) {
  return await client.http<PromotionChannelsResponse>(
    `https://accountinformation.roblox.com/v1/promotion-channels`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
