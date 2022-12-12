import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Deletes all group wall posts made by a specific user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @param userId The user id.
 * @return OK TODO:
 */
export async function deleteAllPostsByUser(client: NobloxClient, groupId: number, userId: number) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/wall/users/${userId}/posts`, {
    method: 'DELETE',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
