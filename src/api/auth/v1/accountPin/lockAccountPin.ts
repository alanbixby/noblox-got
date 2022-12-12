import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Request to locks the account which has an account pin enabled.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function lockAccountPin(client: NobloxClient) {
  return await client.http<ApiSuccessResponse>(`https://auth.roblox.com/v1/account/pin/lock`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
