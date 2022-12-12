import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates the user's status.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user id.
 * @param request TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function updateUserStatus(client: NobloxClient, userId: number, request: SetUserStatusRequest) {
  return await client.http<UserStatusResponse>(`https://users.roblox.com/v1/users/${userId}/status`, {
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
