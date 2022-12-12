import { NobloxClient } from '../../../../client/noblox.js'

/**
 * @deprecated TODO: Deprecated Description Here
 * 🔒 Gets a list of unread conversations
 *
 * @param client the inherited http client and noblox wrapper class
 * @param pageNumber TODO: DESCRIPTION HERE
 * @param pageSize TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function getUnreadConversations(client: NobloxClient, pageNumber: number, pageSize: number) {
  return await client.http<Conversation[]>(`https://chat.roblox.com/v2/get-unread-conversations`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
    searchParams: {
      pageNumber,
      pageSize,
    },
  })
}
