import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Authenticates a user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request {Roblox.Authentication.Api.Models.LoginRequest}.
 * @return Successfully logged in.
 */
export async function login(client: NobloxClient, request: LoginRequest) {
  return await client.http<LoginResponse>(`https://auth.roblox.com/v2/login`, {
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
