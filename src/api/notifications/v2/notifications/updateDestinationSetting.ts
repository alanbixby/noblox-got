import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates the notification destination setting
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return Http response Message
 */
export async function updateDestinationSetting(
  client: NobloxClient,
  requestModel: ReceiverDestinationPreferenceModel
) {
  return await client.http<unknown>(
    `https://notifications.roblox.com/v2/notifications/update-destination-setting`,
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
