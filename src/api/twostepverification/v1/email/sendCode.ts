import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sends a two step verification challenge code via email.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID.
 * @param request The {Roblox.TwoStepVerification.Api.SendCodeRequest}.
 * @return OK TODO:
 */
export async function sendCode(client: NobloxClient, userId: number, request: SendCodeRequest) {
  return await client.http<{}>(
    `https://twostepverification.roblox.com/v1/users/${userId}/challenges/email/send-code`,
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
