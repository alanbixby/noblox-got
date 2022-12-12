import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Update the user's description
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The {Roblox.AccountInformation.Api.Models.DescriptionRequest}
 * @return OK TODO:
 */
export async function setDescription(client: NobloxClient, request: DescriptionRequest) {
  return await client.http<DescriptionResponse>(`https://accountinformation.roblox.com/v1/description`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
