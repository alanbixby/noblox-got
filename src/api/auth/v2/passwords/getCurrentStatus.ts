import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Returns password status for current user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getCurrentStatus(client: NobloxClient) {
  return await client.http<PasswordStatusResponse>(`https://auth.roblox.com/v2/passwords/current-status`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
