import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets robux page settings for the authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getBuyRobuxPageSettingsForUser(client: NobloxClient) {
  return await client.http<unknown>(`https://premiumfeatures.roblox.com/v1/users/buy-robux-settings`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
