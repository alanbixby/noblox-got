import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets messages corresponding to the given conversationId
 *
 * @param client the inherited http client and noblox wrapper class
 * @param conversationId TODO: DESCRIPTION HERE
 * @param pageSize TODO: DESCRIPTION HERE
 * @param exclusiveStartMessageId TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function getMessages(
  client: NobloxClient,
  conversationId: number,
  pageSize: number,
  exclusiveStartMessageId?: string
) {
  return await client.http<ChatMessage[]>(`https://chat.roblox.com/v2/get-messages`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
    searchParams: {
      conversationId,
      pageSize,
      exclusiveStartMessageId,
    },
  })
}
