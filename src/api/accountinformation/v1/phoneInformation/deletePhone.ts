import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Delete Phone
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.AccountInformation.Api.Models.PhoneRequest}
 * @return OK TODO:
 */
export async function deletePhone(client: NobloxClient, request: PhoneRequest) {
  return await client.http<{}>(`https://accountinformation.roblox.com/v1/phone/delete`, {
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
