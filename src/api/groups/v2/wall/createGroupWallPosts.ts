import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🤖 Creates a post on a group wall
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @param request The {Roblox.Groups.Api.CreateWallPostRequest}.
 * @return OK TODO:
 */
export async function createGroupWallPosts(
  client: NobloxClient,
  groupId: number,
  request: CreateWallPostRequest
) {
  return await client.http<GroupWallPostV2Model>(
    `https://groups.roblox.com/v2/groups/${groupId}/wall/posts`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'CAPTCHA',
        isRatelimited: true,
      },
      json: {
        request,
      },
    }
  )
}
