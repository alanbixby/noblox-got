import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Request made to update the account pin on the account.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestBody The request body.
 * @return OK TODO:
 */
export async function updateAccountPin(client: NobloxClient, requestBody: AccountPinRequest) {
  return await client.http<ApiSuccessResponse>(`https://auth.roblox.com/v1/account/pin`, {
    method: 'PATCH',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      requestBody,
    },
  })
}
