import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets metadata about a user's current subscription status
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId User ID
 * @return OK TODO:
 */
export async function getSubscriptionMetadata(client: NobloxClient, userId: number) {
  return await client.http<SubscriptionsMetadataDisplayResponse>(
    `https://premiumfeatures.roblox.com/v1/users/${userId}/subscriptions/metadata`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
