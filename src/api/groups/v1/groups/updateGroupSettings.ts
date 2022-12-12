import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates the group's settings
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The id of the group the user is in.
 * @param request {Roblox.Groups.Api.UpdateGroupSettingsRequest}
 * @return OK TODO:
 */
export async function updateGroupSettings(
  client: NobloxClient,
  groupId: number,
  request: UpdateGroupSettingsRequest
) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/settings`, {
    method: 'PATCH',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
