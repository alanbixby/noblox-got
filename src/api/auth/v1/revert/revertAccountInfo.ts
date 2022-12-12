import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get Revert Account ticket info
 *
 * @param client the inherited http client and noblox wrapper class
 * @param ticket Ticket Guid to revert account.
 * @return OK TODO:
 */
export async function revertAccountInfo(client: NobloxClient, ticket: string) {
  return await client.http<RevertAccountInfoResponse>(`https://auth.roblox.com/v1/revert/account`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      ticket,
    },
  })
}
