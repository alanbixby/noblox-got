import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets latest messages corresponding to the given list of conversation Ids
 *
 * @param client the inherited http client and noblox wrapper class
 * @param conversationIds TODO: DESCRIPTION HERE
 * @param pageSize TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function getLatestMessages(client: NobloxClient, conversationIds: number[], pageSize: number) {
  return await client.http<MultigetConversationMessagesResponse[]>(
    `https://chat.roblox.com/v2/multi-get-latest-messages`,
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
