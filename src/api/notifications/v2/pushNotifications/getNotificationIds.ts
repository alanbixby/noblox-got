import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the notificationIds for the specified notification token
 *
 * @param client the inherited http client and noblox wrapper class
 * @param notificationToken Token for the notification
 * @param limit Max number of notifications to get
 * @param cursor starting point to get the notifications
 * @return TODO:
 */
export async function getNotificationIds(
  client: NobloxClient,
  notificationToken: string,
  limit: number,
  cursor?: number
) {
  return await client.http<NotificationIdsResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/notification-ids`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        notificationToken,
        limit,
        cursor,
      },
    }
  )
}
