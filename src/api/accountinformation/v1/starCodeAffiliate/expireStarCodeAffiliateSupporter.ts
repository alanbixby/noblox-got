import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Removes the star code affiliate supporter for the authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function expireStarCodeAffiliateSupporter(client: NobloxClient) {
  return await client.http<{}>(`https://accountinformation.roblox.com/v1/star-code-affiliates`, {
    method: 'DELETE',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
