import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Claims ownership of the group as the authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @return OK TODO:
 */
export async function claimGroupOwnership(client: NobloxClient, groupId: number) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/claim-ownership`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
