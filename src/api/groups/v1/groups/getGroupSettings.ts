import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets the Group's settings
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The id of the group the user is in.
 * @return OK TODO:
 */
export async function getGroupSettings(client: NobloxClient, groupId: number) {
  return await client.http<GroupSettingsResponse>(`https://groups.roblox.com/v1/groups/${groupId}/settings`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
    },
  })
}
