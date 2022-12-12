import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets currency for the specified group.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id to get the currency for.
 * @return OK TODO:
 */
export async function getGroupCurrency(client: NobloxClient, groupId: number) {
  return await client.http<CurrencyResponse>(`https://economy.roblox.com/v1/groups/${groupId}/currency`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
    },
  })
}
