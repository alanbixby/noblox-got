import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Registers Firefox for push notifications
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function registerFirefox(client: NobloxClient, requestModel: RegisterFirefoxRequestModel) {
  return await client.http<RegistrationResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/register-firefox`,
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
