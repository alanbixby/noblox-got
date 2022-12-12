import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates recurring payouts.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The group Id.
 * @param request The {Roblox.Groups.Api.PayoutRequest}.
 * @return OK TODO:
 */
export async function updateRecurringPayouts(client: NobloxClient, groupId: number, request: PayoutRequest) {
  return await client.http<{}>(`https://groups.roblox.com/v1/groups/${groupId}/payouts/recurring`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
