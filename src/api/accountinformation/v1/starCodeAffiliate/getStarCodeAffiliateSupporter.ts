import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets a star code affiliate supporter for the authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getStarCodeAffiliateSupporter(client: NobloxClient) {
  return await client.http<StarCodeAffiliateResponse>(
    `https://accountinformation.roblox.com/v1/star-code-affiliates`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
