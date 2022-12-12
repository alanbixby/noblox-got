import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Authenticates as a user given a two step verification verification token.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID to authenticate as.
 * @param request The {Roblox.Authentication.Api.TwoStepVerificationLoginRequest}.
 * @return OK TODO:
 */
export async function twoStepVerificationV3Login(
  client: NobloxClient,
  userId: number,
  request: TwoStepVerificationLoginRequest
) {
  return await client.http<{}>(`https://auth.roblox.com/v3/users/${userId}/two-step-verification/login`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
