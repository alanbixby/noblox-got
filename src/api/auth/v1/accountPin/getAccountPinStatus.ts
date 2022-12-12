import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the account pin status. If the account pin is valid, this returns the time in seconds until when the account pin is unlocked.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getAccountPinStatus(client: NobloxClient) {
  return await client.http<AccountPinStatusResponse>(`https://auth.roblox.com/v1/account/pin`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
