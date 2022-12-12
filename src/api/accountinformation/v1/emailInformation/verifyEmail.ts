import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Verify the user's email address from token
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.AccountInformation.Api.Models.VerifyEmailRequest}
 * @return OK TODO:
 */
export async function verifyEmail(client: NobloxClient, request: VerifyEmailRequest) {
  return await client.http<VerifyEmailResponse>(`https://accountinformation.roblox.com/v1/email/verify`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
