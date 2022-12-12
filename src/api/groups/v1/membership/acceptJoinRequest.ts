import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Accepts a group join request.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param userId The user Id.
 * @return OK TODO:
 */
export async function acceptJoinRequest(client: NobloxClient, groupId: number, userId: number) {
  return await client.http<{}>(
    `https://groups.roblox.com/v1/groups/${groupId}/join-requests/users/${userId}`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
