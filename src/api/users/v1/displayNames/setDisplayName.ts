import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Set the display name for the authorized user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId the user id
 * @param request {Roblox.Users.Api.SetDisplayNameRequest}
 * @return OK TODO:
 */
export async function setDisplayName(client: NobloxClient, userId: number, request: SetDisplayNameRequest) {
  return await client.http<{}>(`https://users.roblox.com/v1/users/${userId}/display-names`, {
    method: 'PATCH',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      request,
    },
  })
}
