import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets groups that the authenticated user has requested to join
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getPendingGroupJoins(client: NobloxClient) {
  return await client.http<GroupDetailResponse[]>(`https://groups.roblox.com/v1/user/groups/pending`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
