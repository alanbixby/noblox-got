import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updated the notification band settings
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return Http response Message
 */
export async function updateNotificationBandSettings(
  client: NobloxClient,
  requestModel: NotificationBandSettingsModel
) {
  return await client.http<unknown>(
    `https://notifications.roblox.com/v2/notifications/update-notification-settings`,
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
