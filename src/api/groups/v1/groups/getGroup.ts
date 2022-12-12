import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets group information
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @return OK TODO:
 */
export async function getGroup(client: NobloxClient, groupId: number) {
  return await client.http<GroupDetailResponse>(`https://groups.roblox.com/v1/groups/${groupId}`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
