import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Update the user's gender
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The {Roblox.AccountInformation.Api.Models.GenderRequest}
 * @return OK TODO:
 */
export async function setGender(client: NobloxClient, request: GenderRequest) {
  return await client.http<{}>(`https://accountinformation.roblox.com/v1/gender`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
