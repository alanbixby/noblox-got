import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Opts out from the specified notification source types
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return Http response message
 */
export async function optOutOfNotificationSourceType(
  client: NobloxClient,
  requestModel: NotificationSourceTypeModel
) {
  return await client.http<unknown>(
    `https://notifications.roblox.com/v2/notifications/notification-source-types/opt-out`,
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
