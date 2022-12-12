import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 TODO: DESCRIPTION HERE
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getAddFundsAllowed(client: NobloxClient, groupId: number) {
  return await client.http<boolean>(`https://economy.roblox.com/v1/groups/${groupId}/addfunds/allowed`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
    },
  })
}
