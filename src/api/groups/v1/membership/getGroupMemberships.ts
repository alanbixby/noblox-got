import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of all group roles for groups the specified user is in.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user id.
 * @return TODO:
 */
export async function getGroupMemberships(client: NobloxClient, userId: number) {
  return await client.http<GroupMembershipDetailResponse[]>(
    `https://groups.roblox.com/v1/users/${userId}/groups/roles`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
