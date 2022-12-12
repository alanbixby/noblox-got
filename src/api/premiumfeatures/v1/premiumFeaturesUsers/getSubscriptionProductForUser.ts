import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets a user's current subscription product
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId User ID
 * @return OK TODO:
 */
export async function getSubscriptionProductForUser(client: NobloxClient, userId: number) {
  return await client.http<unknown>(`https://premiumfeatures.roblox.com/v1/users/${userId}/subscriptions`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
