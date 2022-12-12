import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 TODO: DESCRIPTION HERE
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getAddFundsLatest(client: NobloxClient, groupId: number) {
  return await client.http<LatestAddFundsResponse>(
    `https://economy.roblox.com/v1/groups/${groupId}/addfunds/latest`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
