import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Looks up groups by a name. Prioritizes an exact match as the first result.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupName The group name.
 * @return OK TODO:
 */
export async function lookupGroupsByName(client: NobloxClient, groupName: string) {
  return await client.http<GroupBasicResponse[]>(`https://groups.roblox.com/v1/groups/search/lookup`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      groupName,
    },
  })
}
