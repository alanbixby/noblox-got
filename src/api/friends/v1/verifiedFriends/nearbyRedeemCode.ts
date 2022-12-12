import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Redeems nearby code
 *
 * @param client the inherited http client and noblox wrapper class
 * @param code TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function nearbyRedeemCode(client: NobloxClient, code: string) {
  return await client.http<{}>(`https://friends.roblox.com/v1/friends/verified/nearby/${code}/redeem`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
  })
}
