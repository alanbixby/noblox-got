import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get if a user has a Premium membership for RCC only
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId User ID
 * @return OK TODO:
 */
export async function getIsPremiumUserForUserRcc(client: NobloxClient, userId: number) {
  return await client.http<unknown>(
    `https://premiumfeatures.roblox.com/v1/users/${userId}/validate-membership-rcc`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
