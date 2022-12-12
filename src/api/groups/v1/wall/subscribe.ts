import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Subscribes the authenticated user to notifications of group wall events.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group id.
 * @return OK TODO:
 */
export async function subscribe(client: NobloxClient, groupId: number) {
  return await client.http<unknown>(`https://groups.roblox.com/v1/groups/${groupId}/wall/subscribe`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
