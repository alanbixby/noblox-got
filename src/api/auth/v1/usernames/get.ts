import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of existing usernames on Roblox based on the query parameters
 *
 * @param client the inherited http client and noblox wrapper class
 * @param username The username
 * @return OK TODO:
 */
export async function get(client: NobloxClient, username?: string) {
  return await client.http<UsernamesResponse>(`https://auth.roblox.com/v1/usernames`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      username,
    },
  })
}
