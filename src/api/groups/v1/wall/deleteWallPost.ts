import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Deletes a group wall post.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @param postId The group wall post id.
 * @return OK TODO:
 */
export async function deleteWallPost(client: NobloxClient, groupId: number, postId: number) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/wall/posts/${postId}`, {
    method: 'DELETE',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
