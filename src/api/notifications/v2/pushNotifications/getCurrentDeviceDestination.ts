import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the current device destination
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function getCurrentDeviceDestination(client: NobloxClient) {
  return await client.http<GetCurrentPushDestinationResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/get-current-device-destination`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
