import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sends a message to a specified user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param sendMessageRequest TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function sendMessage(client: NobloxClient, sendMessageRequest: SendMessageRequest) {
  return await client.http<SendMessageResponse>(`https://privatemessages.roblox.com/v1/messages/send`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      sendMessageRequest,
    },
  })
}
