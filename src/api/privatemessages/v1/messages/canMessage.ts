import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets whether the sender can send a message to the specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function canMessage(client: NobloxClient, userId: number) {
  return await client.http<CanMessageResponse>(
    `https://privatemessages.roblox.com/v1/messages/${userId}/can-message`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
