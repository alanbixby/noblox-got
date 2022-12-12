import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Verifies a two step verification code.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The request model containing information needed to verify with two step verification.
 * @return OK TODO:
 */
export async function verify(client: NobloxClient, request: TwoStepVerificationVerifyRequest) {
  return await client.http<{}>(`https://auth.roblox.com/v2/twostepverification/verify`, {
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
