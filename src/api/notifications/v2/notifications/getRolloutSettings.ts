import { NobloxClient } from '../../../../client/noblox.js'

/**
 * @deprecated TODO: Deprecated Description Here
 * 🔒 Gets the notification settings related to rollout
 *
 * @param client the inherited http client and noblox wrapper class
 * @param featureNames names of features to get the corresponding rollout values
 * @return OK TODO:
 */
export async function getRolloutSettings(client: NobloxClient, featureNames: string[]) {
  return await client.http<NotificationRolloutSettingsModel>(
    `https://notifications.roblox.com/v2/notifications/get-rollout-settings`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        featureNames,
      },
    }
  )
}
