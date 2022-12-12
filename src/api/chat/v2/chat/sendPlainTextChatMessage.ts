import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sends a chat message
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function sendPlainTextChatMessage(
  client: NobloxClient,
  requestModel: SendPlainTextChatMessageRequest
) {
  return await client.http<SendPlainTextChatMessageResponse>(`https://chat.roblox.com/v2/send-message`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      requestModel,
    },
  })
}
