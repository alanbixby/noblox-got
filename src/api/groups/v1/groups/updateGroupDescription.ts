import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates the groups description
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The id of the group the user is in.
 * @param request The {Roblox.Groups.Api.UpdateGroupDescriptionRequest}.
 * @return OK TODO:
 */
export async function updateGroupDescription(
  client: NobloxClient,
  groupId: number,
  request: UpdateGroupDescriptionRequest
) {
  return await client.http<GroupDescriptionResponse>(
    `https://groups.roblox.com/v1/groups/${groupId}/description`,
    {
      method: 'PATCH',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        request,
      },
    }
  )
}
