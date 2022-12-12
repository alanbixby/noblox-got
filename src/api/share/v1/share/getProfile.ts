import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets profile details.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getProfile(client: NobloxClient) {
  return await client.http<ProfileResponse>(`https://share.roblox.com/v1/share/profile`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
