import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Registers IOS device for push notifications
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function registerIosNative(client: NobloxClient, requestModel: RegisterIosNativeRequestModel) {
  return await client.http<RegistrationResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/register-ios-native`,
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
