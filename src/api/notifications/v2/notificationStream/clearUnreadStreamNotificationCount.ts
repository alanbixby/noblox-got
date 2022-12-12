import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Clears the unread Notification stream count
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function clearUnreadStreamNotificationCount(client: NobloxClient) {
  return await client.http<SuccessResponseModel>(
    `https://notifications.roblox.com/v2/stream-notifications/clear-unread`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
