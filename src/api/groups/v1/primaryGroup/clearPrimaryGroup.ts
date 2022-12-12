import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Removes the authenticated user's primary group
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function clearPrimaryGroup(client: NobloxClient) {
  return await client.http<{}>(`https://groups.roblox.com/v1/user/groups/primary`, {
    method: 'DELETE',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
