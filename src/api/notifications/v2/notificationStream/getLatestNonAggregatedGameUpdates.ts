import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 TODO: DESCRIPTION HERE
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeIds List of universe IDs
 * @param sinceDateTime For retrieving only updates that created after a time point.
 * @return OK TODO:
 */
export async function getLatestNonAggregatedGameUpdates(
  client: NobloxClient,
  universeIds: number[],
  sinceDateTime?: string
) {
  return await client.http<GameUpdateNotificationModel[]>(
    `https://notifications.roblox.com/v2/stream-notifications/get-latest-game-updates`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        universeIds,
        sinceDateTime,
      },
    }
  )
}
