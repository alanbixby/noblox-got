import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets a message's details.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param messageId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getMessage(client: NobloxClient, messageId: number) {
  return await client.http<MessageDetailsResponse>(
    `https://privatemessages.roblox.com/v1/messages/${messageId}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
