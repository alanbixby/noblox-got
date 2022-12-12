import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a user's primary group.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user id.
 * @return TODO:
 */
export async function getPrimaryGroup(client: NobloxClient, userId: number) {
  return await client.http<GroupMembershipDetailResponse>(
    `https://groups.roblox.com/v1/users/${userId}/groups/primary/role`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
