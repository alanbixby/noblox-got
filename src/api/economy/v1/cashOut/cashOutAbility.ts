import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets information regarding whether user can cash out, and any specific reasons why the user would not be able to cashout.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function cashOutAbility(client: NobloxClient) {
  return await client.http<CashOutAbilityResponseModel>(
    `https://economy.roblox.com/v1/developer-exchange/cashoutAbility`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
