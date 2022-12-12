import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Request for deletes the account pin from the account.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function deleteAccountPin(client: NobloxClient) {
  return await client.http<ApiSuccessResponse>(`https://auth.roblox.com/v1/account/pin`, {
    method: 'DELETE',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
