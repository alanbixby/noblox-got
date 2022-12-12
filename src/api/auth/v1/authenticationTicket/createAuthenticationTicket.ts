import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Creates a one time use authentication ticket for authenticated users.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return The authentication ticket for the user successfully created.
 */
export async function createAuthenticationTicket(client: NobloxClient) {
  return await client.http<{}>(`https://auth.roblox.com/v1/authentication-ticket`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
