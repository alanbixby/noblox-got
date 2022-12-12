import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Send a test notification
 *
 * @param client the inherited http client and noblox wrapper class
 * @param testGuid Test Guid (optional)
 * @return TODO:
 */
export async function sendTestNotification(client: NobloxClient, testGuid?: string) {
  return await client.http<SuccessResponseModel>(
    `https://notifications.roblox.com/v2/verification/send-test-notification`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      searchParams: {
        testGuid,
      },
    }
  )
}
