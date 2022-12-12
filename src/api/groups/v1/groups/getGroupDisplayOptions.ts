import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * ✅ Gets Groups contextual information:
Max number of groups a user can be part of. 
Current number of groups a user is a member of. 
Whether to show/hide certain features based on device type.
      * 
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
      */
export async function getGroupDisplayOptions(client: NobloxClient) {
  return await client.http<GroupsDisplayOptionsResponse>(`https://groups.roblox.com/v1/groups/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
