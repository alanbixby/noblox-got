import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Resend Phone code
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.AccountInformation.Api.Models.PhoneRequest}
 * @return OK TODO:
 */
export async function resendPhone(client: NobloxClient, request: PhoneRequest) {
  return await client.http<{}>(`https://accountinformation.roblox.com/v1/phone/resend`, {
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
