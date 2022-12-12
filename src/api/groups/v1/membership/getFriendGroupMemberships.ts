import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets a list of all groups the specified users' friends are in.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user id.
 * @return TODO:
 */
export async function getFriendGroupMemberships(client: NobloxClient, userId: number) {
  return await client.http<UserGroupMembershipResponse[]>(
    `https://groups.roblox.com/v1/users/${userId}/friends/groups/roles`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
