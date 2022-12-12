import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets data from a nearby code
 *
 * @param client the inherited http client and noblox wrapper class
 * @param code TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function nearbyGetData(client: NobloxClient, code: string) {
  return await client.http<NearbyFriendsDataResponseModel>(
    `https://friends.roblox.com/v1/friends/verified/nearby/code/${code}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
        isRatelimited: true,
      },
    }
  )
}
