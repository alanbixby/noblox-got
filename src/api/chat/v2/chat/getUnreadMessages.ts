import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the unread messages for the conversationIds specified in the parameters
 *
 * @param client the inherited http client and noblox wrapper class
 * @param conversationIds TODO: DESCRIPTION HERE
 * @param pageSize TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function getUnreadMessages(client: NobloxClient, conversationIds: number[], pageSize: number) {
  return await client.http<MultigetConversationMessagesResponse[]>(
    `https://chat.roblox.com/v2/get-unread-messages`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        conversationIds,
        pageSize,
      },
    }
  )
}
