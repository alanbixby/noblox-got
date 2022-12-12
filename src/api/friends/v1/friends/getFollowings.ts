import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Get all users that user with targetUserId is following in page response format
 *
 * @param client the inherited http client and noblox wrapper class
 * @param targetUserId TODO: DESCRIPTION HERE
 * @param sortOrder The order the results are sorted in.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getFollowings(
  client: NobloxClient,
  targetUserId: number,
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<UserResponse[]>(`https://friends.roblox.com/v1/users/${targetUserId}/followings`, {
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
