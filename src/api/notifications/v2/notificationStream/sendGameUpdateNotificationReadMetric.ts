import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sends metrics when a Game Update Notification is Read from the Game Update Notifications Section of the Notification Stream
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function sendGameUpdateNotificationReadMetric(
  client: NobloxClient,
  requestModel: GameUpdateNotificationReadRequestModel
) {
  return await client.http<SuccessResponseModel>(
    `https://notifications.roblox.com/v2/stream-notifications/game-update-notification-read`,
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
