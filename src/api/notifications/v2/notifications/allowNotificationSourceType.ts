import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Allows the specified notification source types
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return Http response message
 */
export async function allowNotificationSourceType(
  client: NobloxClient,
  requestModel: NotificationSourceTypeModel
) {
  return await client.http<unknown>(
    `https://notifications.roblox.com/v2/notifications/notification-source-types/allow`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        requestModel,
      },
    }
  )
}
