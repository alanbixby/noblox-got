import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Update the user's birthdate
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The {Roblox.AccountInformation.Api.Models.BirthdateRequest}
 * @return OK TODO:
 */
export async function setBirthdate(client: NobloxClient, request: BirthdateRequest) {
  return await client.http<{}>(`https://accountinformation.roblox.com/v1/birthdate`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
