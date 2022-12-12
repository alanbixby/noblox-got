import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 For every authenticated user, the clients hit this endpoint to get the chat related settings. Example : Chat is enabled or not
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function getChatSettings(client: NobloxClient) {
  return await client.http<ChatSettingsResponse>(`https://chat.roblox.com/v2/chat-settings`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
