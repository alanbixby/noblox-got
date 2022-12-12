import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets currency for the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user Id to get the currency for.
 * @return OK TODO:
 */
export async function getUserCurrency(client: NobloxClient, userId: number) {
  return await client.http<CurrencyResponse>(`https://economy.roblox.com/v1/users/${userId}/currency`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
    },
  })
}
