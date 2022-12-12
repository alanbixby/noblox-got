import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Verify Phone
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.AccountInformation.Api.Models.VerifyPhoneRequest}
 * @return OK TODO:
 */
export async function verifyPhone(client: NobloxClient, request: VerifyPhoneRequest) {
  return await client.http<{}>(`https://accountinformation.roblox.com/v1/phone/verify`, {
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
