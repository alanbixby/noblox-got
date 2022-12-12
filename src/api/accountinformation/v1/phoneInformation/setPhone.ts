import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Set Phone Number
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.AccountInformation.Api.Models.PhoneRequest}
 * @return OK TODO:
 */
export async function setPhone(client: NobloxClient, request: PhoneRequest) {
  return await client.http<{}>(`https://accountinformation.roblox.com/v1/phone`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      request,
    },
  })
}
