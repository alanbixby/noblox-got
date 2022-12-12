import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets the permissions for a group's guest roleset. These can be viewed by all (members and guests) users.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @return OK TODO:
 */
export async function getPermissionsForGroupGuestRole(client: NobloxClient, groupId: number) {
  return await client.http<GroupPermissionsResponse>(
    `https://groups.roblox.com/v1/groups/${groupId}/roles/guest/permissions`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
