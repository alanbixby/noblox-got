import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Registers Chrome for push notifications
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function registerChrome(client: NobloxClient, requestModel: RegisterChromeRequestModel) {
  return await client.http<RegistrationResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/register-chrome`,
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
