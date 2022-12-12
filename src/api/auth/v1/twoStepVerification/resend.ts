import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Resends a two step verification code.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The request.
 * @return OK TODO:
 */
export async function resend(client: NobloxClient, request: TwoStepVerificationTicketRequest) {
  return await client.http<TwoStepVerificationSentResponse>(
    `https://auth.roblox.com/v1/twostepverification/resend`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
      json: {
        request,
      },
    }
  )
}
