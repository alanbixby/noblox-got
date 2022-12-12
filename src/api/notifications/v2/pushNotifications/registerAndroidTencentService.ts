import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Register Android Tencent service device for push notifications
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function registerAndroidTencentService(
  client: NobloxClient,
  requestModel: RegisterTencentServiceRequestModel
) {
  return await client.http<RegistrationResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/register-android-tencent-service`,
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
