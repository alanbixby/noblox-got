import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get promotion channels for a given user ID
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getPromotionChannelsByUserId(client: NobloxClient, userId: number) {
  return await client.http<PromotionChannelsByUserIdResponse>(
    `https://accountinformation.roblox.com/v1/users/${userId}/promotion-channels`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
