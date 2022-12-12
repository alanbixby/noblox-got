import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Pays out a user in Robux.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param request The {Roblox.Groups.Api.PayoutRequest}.
 * @return OK TODO:
 */
export async function makeOneTimePayout(client: NobloxClient, groupId: number, request: PayoutRequest) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/payouts`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
