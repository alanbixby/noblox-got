import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Returns number of consecutive login days for xbox users
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getXboxLiveConsecutiveLoginDays(client: NobloxClient) {
  return await client.http<ConsecutiveLoginDaysResponse>(
    `https://accountinformation.roblox.com/v1/xbox-live/consecutive-login-days`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
