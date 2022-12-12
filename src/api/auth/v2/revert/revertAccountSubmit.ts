import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Submit Revert Account Request
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The {Roblox.Authentication.Api.Models.RevertAccountSubmitRequest} containing the necessary information to revert account.
 * @return OK TODO:
 */
export async function revertAccountSubmit(client: NobloxClient, request: RevertAccountSubmitRequest) {
  return await client.http<LoginResponse>(`https://auth.roblox.com/v2/revert/account`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
