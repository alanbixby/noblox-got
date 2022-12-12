import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets a group join request by userId.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param userId The user Id.
 * @return OK TODO:
 */
export async function getGroupJoinRequestByGroupAndUser(
  client: NobloxClient,
  groupId: number,
  userId: number
) {
  return await client.http<GroupJoinRequestResponse>(
    `https://groups.roblox.com/v1/groups/${groupId}/join-requests/users/${userId}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
