import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 TODO: DESCRIPTION HERE
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function sendGameLinkMessage(
  client: NobloxClient,
  requestModel: SendGameLinkChatMessageRequest
) {
  return await client.http<SendLinkChatResponse>(`https://chat.roblox.com/v2/send-game-link-message`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      requestModel,
    },
  })
}
