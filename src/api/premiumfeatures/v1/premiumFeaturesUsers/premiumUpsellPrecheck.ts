import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Premium upsell precheck
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId User ID
 * @param universeId TODO: DESCRIPTION HERE
 * @param placeId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function premiumUpsellPrecheck(
  client: NobloxClient,
  userId: number,
  universeId: number,
  placeId: number
) {
  return await client.http<unknown>(
    `https://premiumfeatures.roblox.com/v1/users/${userId}/premium-upsell-precheck`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        universeId,
        placeId,
      },
    }
  )
}
