import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Supresses the notification stream prompt
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function suppressPrompt(client: NobloxClient) {
  return await client.http<SuccessResponseModel>(
    `https://notifications.roblox.com/v2/stream-notifications/suppress-prompt`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
