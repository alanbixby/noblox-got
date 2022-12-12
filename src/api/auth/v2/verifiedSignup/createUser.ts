import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Create a new user with a signup voucher
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function createUser(client: NobloxClient, request: VerifiedSignupUserCreationRequest) {
  return await client.http<SignupResponse>(`https://auth.roblox.com/v2/verified-signup`, {
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
