import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Adds a star code affiliate supporter for the authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.AccountInformation.Api.Models.StarCodeAffiliateRequest}
 * @return OK TODO:
 */
export async function addStarCodeAffiliateSupporter(client: NobloxClient, request: StarCodeAffiliateRequest) {
  return await client.http<StarCodeAffiliateResponse>(
    `https://accountinformation.roblox.com/v1/star-code-affiliates`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        request,
      },
    }
  )
}
