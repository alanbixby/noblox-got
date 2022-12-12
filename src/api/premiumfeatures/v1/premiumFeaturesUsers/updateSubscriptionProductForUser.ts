import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates the subscription and returns the new Subscription product for the User.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @param productId The ID of the product
 * @return OK TODO:
 */
export async function updateSubscriptionProductForUser(
  client: NobloxClient,
  userId: number,
  productId: number
) {
  return await client.http<unknown>(`https://premiumfeatures.roblox.com/v1/users/${userId}/subscriptions`, {
    method: 'PATCH',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    searchParams: {
      productId,
    },
  })
}
