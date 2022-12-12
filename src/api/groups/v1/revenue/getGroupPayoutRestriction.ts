import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets a value indicating whether the group can use payout feature
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @return OK TODO:
 */
export async function getGroupPayoutRestriction(client: NobloxClient, groupId: number) {
  return await client.http<GroupPayoutRestrictionResponse>(
    `https://groups.roblox.com/v1/groups/${groupId}/payout-restriction`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
