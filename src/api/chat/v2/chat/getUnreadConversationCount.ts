import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the count of unread conversations
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function getUnreadConversationCount(client: NobloxClient) {
  return await client.http<UnreadConversationCountResponse>(
    `https://chat.roblox.com/v2/get-unread-conversation-count`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
