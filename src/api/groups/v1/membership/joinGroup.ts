import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🤖 Joins a group
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param joinGroupModel Only supplied when captcha has been solved.
 * @return OK TODO:
 */
export async function joinGroup(client: NobloxClient, groupId: number, joinGroupModel: JoinGroupRequest) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/users`, {
    method: 'POST',
    context: {
      authenticationLevel: 'CAPTCHA',
      isRatelimited: true,
    },
    json: {
      joinGroupModel,
    },
  })
}
