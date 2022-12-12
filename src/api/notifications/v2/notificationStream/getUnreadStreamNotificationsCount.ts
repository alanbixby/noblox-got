import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the count of unread Notification stream entries
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function getUnreadStreamNotificationsCount(client: NobloxClient) {
  return await client.http<UnreadStreamNotificationsModel>(
    `https://notifications.roblox.com/v2/stream-notifications/unread-count`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
