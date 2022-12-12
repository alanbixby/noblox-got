import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Determines if a user by id is allowed to receive a VIP Server invite from the authenticated user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user id.
 * @return OK TODO:
 */
export async function canInviteUserId(client: NobloxClient, userId: number) {
  return await client.http<VipServerCanInviteResponse>(
    `https://games.roblox.com/v1/vip-server/can-invite/${userId}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
