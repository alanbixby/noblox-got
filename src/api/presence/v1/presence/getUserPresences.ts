import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get Presence for a list of users
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userPresenceRequest TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getUserPresences(client: NobloxClient, userPresenceRequest: UserPresenceRequest) {
  return await client.http<UserPresencesResponse>(`https://presence.roblox.com/v1/presence/users`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    json: {
      userPresenceRequest,
    },
  })
}
