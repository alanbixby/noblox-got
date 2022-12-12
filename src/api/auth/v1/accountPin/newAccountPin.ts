import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Reuqest to create the account pin.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestBody The {Roblox.Authentication.Api.Models.AccountPinRequest}.
 * @return OK TODO:
 */
export async function newAccountPin(client: NobloxClient, requestBody: AccountPinRequest) {
  return await client.http<ApiSuccessResponse>(`https://auth.roblox.com/v1/account/pin`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      requestBody,
    },
  })
}
