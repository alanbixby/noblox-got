import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Get all users that friend requests with targetUserId using exclusive start paging
 *
 * @param client the inherited http client and noblox wrapper class
 * @param sortOrder Sorted by friend request updated time with default descending sort order
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getFriendRequests(
  client: NobloxClient,
  sortOrder: 'Asc' | 'Desc' = 'Desc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<UserResponseV2[]>(`https://friends.roblox.com/v1/my/friends/requests`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
      isRatelimited: true,
    },
    searchParams: {
      sortOrder,
      limit,
      cursor,
    },
  })
}
