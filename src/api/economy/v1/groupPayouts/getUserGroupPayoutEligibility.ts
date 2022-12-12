import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the group payout eligibility for a group of users.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId TODO: DESCRIPTION HERE
 * @param userIds TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getUserGroupPayoutEligibility(
  client: NobloxClient,
  groupId: number,
  userIds: number[]
) {
  return await client.http<UserGroupPayoutEligibilityResponseModel>(
    `https://economy.roblox.com/v1/groups/${groupId}/users-payout-eligibility`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        userIds,
      },
    }
  )
}
