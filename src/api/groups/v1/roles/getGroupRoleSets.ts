import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets the Roles by their ids.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param ids A list of role ids
 * @return OK TODO:
 */
export async function getGroupRoleSets(client: NobloxClient, ids: number[]) {
  return await client.http<GroupRoleDetailResponse[]>(`https://groups.roblox.com/v1/roles`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      ids,
    },
  })
}
