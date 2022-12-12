import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Register Amazon Android for push notifications
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function registerAndroidAmazon(
  client: NobloxClient,
  requestModel: RegisterAndroidAmazonRequestModel
) {
  return await client.http<RegistrationResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/register-android-amazon`,
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
