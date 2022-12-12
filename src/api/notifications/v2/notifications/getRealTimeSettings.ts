import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the notification settings related to realtime
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getRealTimeSettings(client: NobloxClient) {
  return await client.http<RealTimeNotificationsSettingsResponseModel>(
    `https://notifications.roblox.com/v2/notifications/settings/realtime`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
