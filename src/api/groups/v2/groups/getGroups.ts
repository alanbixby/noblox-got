import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Multi-get groups information by Ids.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupIds The group Ids.
 * @return OK TODO:
 */
export async function getGroups(client: NobloxClient, groupIds: number[]) {
  return await client.http<GroupResponseV2[]>(`https://groups.roblox.com/v2/groups`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      groupIds,
    },
  })
}
