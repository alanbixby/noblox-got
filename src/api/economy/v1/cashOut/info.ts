import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Retrieves information needed to display in the cash out widget or page
 *
 * @param client the inherited http client and noblox wrapper class
 * @param fromDevExPage TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function info(client: NobloxClient, fromDevExPage?: boolean) {
  return await client.http<CashoutInfoResponseModel>(
    `https://economy.roblox.com/v1/developer-exchange/info`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        fromDevExPage,
      },
    }
  )
}
