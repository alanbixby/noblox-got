import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets premium disclosure settings for the authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getPremiumDisclosureSettingsForUser(client: NobloxClient) {
  return await client.http<unknown>(
    `https://premiumfeatures.roblox.com/v1/users/premium-disclosure-settings`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
