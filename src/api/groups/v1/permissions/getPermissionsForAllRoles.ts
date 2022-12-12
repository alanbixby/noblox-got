import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets all permissions for each role
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @return OK TODO:
 */
export async function getPermissionsForAllRoles(client: NobloxClient, groupId: number) {
  return await client.http<GroupPermissionsResponse[]>(
    `https://groups.roblox.com/v1/groups/${groupId}/roles/permissions`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
