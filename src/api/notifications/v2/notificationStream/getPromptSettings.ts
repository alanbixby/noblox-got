import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the Notification stream prompt settings
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function getPromptSettings(client: NobloxClient) {
  return await client.http<NotificationStreamPromptSettingsModel>(
    `https://notifications.roblox.com/v2/stream-notifications/get-prompt-settings`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
