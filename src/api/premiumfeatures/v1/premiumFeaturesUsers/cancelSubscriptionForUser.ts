import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Cancel membership endpoint that works for both the new subscription product and BC
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function cancelSubscriptionForUser(client: NobloxClient, userId: number) {
  return await client.http<unknown>(
    `https://premiumfeatures.roblox.com/v1/users/${userId}/subscriptions/cancel`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
