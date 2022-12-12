import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of friend statuses of specified users against the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user to check the friend statuses against.
 * @param userIds TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getFriendStatuses(client: NobloxClient, userId: number, userIds: number[]) {
  return await client.http<FriendStatusResponse[]>(
    `https://friends.roblox.com/v1/users/${userId}/friends/statuses`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        userIds,
      },
    }
  )
}
