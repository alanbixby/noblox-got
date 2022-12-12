import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 De-register all devices to disable push notifications
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function deregisterAllDevices(client: NobloxClient) {
  return await client.http<SuccessResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/deregister-all-devices`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
