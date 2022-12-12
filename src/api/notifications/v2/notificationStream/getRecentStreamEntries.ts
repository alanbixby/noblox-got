import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the recent entries from the notification stream
 *
 * @param client the inherited http client and noblox wrapper class
 * @param startIndex Index to start the entries from. (Optional : Defaults to 0 which means the most recent entry)
 * @param maxRows Number of entries to be returned. (Optional : Defaults to 10 entries)
 * @return TODO:
 */
export async function getRecentStreamEntries(client: NobloxClient, startIndex?: number, maxRows?: number) {
  return await client.http<NotificationStreamEntriesModel[]>(
    `https://notifications.roblox.com/v2/stream-notifications/get-recent`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        startIndex,
        maxRows,
      },
    }
  )
}
