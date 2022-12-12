import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Requests to unlock the account pin.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestBody The {Roblox.Authentication.Api.Models.AccountPinRequest} containing the entered pin.
 * @return OK TODO:
 */
export async function unlockAccountPin(client: NobloxClient, requestBody: AccountPinRequest) {
  return await client.http<AccountPinResponse>(`https://auth.roblox.com/v1/account/pin/unlock`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      requestBody,
    },
  })
}
