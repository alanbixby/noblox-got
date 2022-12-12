import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 De-register current device to diable push notifications
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function deregisterCurrentDevice(client: NobloxClient) {
  return await client.http<SuccessResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/deregister-current-device`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
