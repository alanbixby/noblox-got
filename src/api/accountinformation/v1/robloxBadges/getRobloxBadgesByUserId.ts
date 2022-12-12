import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Returns a list of Roblox badges belonging to a user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getRobloxBadgesByUserId(client: NobloxClient, userId: number) {
  return await client.http<RobloxBadgeResponse[]>(
    `https://accountinformation.roblox.com/v1/users/${userId}/roblox-badges`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
