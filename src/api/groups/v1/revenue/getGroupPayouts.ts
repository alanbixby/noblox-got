import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets a list of the group payout percentages
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @return OK TODO:
 */
export async function getGroupPayouts(client: NobloxClient, groupId: number) {
  return await client.http<GroupPayoutResponse[]>(`https://groups.roblox.com/v1/groups/${groupId}/payouts`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
    },
  })
}
