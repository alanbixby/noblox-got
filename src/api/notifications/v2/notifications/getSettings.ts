import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets settings related to notifications for the signed in user
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getSettings(client: NobloxClient) {
  return await client.http<UserNotificationSettingsModel>(
    `https://notifications.roblox.com/v2/notifications/get-settings`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
