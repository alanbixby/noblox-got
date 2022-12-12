import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets group membership information in the context of the authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @return OK TODO:
 */
export async function getGroupMembership(client: NobloxClient, groupId: number) {
  return await client.http<GroupMembershipMetadataResponse>(
    `https://groups.roblox.com/v1/groups/${groupId}/membership`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
