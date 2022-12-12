import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets recent Robux revenue summary for a group.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id to get Robux summary for.
 * @param timeFrame The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
 * @return OK TODO:
 */
export async function getGroupRevenueSummary(
  client: NobloxClient,
  groupId: number,
  timeFrame: 'Day' | 'Week' | 'Month' | 'Year'
) {
  return await client.http<RevenueSummaryResponse>(
    `https://economy.roblox.com/v1/groups/${groupId}/revenue/summary/${timeFrame}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
