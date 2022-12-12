import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets conversations for the conversationIds specified in the parameters
 *
 * @param client the inherited http client and noblox wrapper class
 * @param conversationIds Ids of the conversations to be returned
 * @return TODO:
 */
export async function getConversations(client: NobloxClient, conversationIds: number[]) {
  return await client.http<Conversation[]>(`https://chat.roblox.com/v2/get-conversations`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
    searchParams: {
      conversationIds,
    },
  })
}
