import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Register Android Native for push notifications
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function registerAndroidNative(client: NobloxClient, requestModel: RegisterAndroidRequestModel) {
  return await client.http<RegistrationResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/register-android-native`,
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
