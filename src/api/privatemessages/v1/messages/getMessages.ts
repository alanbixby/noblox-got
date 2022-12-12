import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets a user's messages.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param pageNumber TODO: DESCRIPTION HERE
 * @param pageSize TODO: DESCRIPTION HERE
 * @param messageTab TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getMessages(
  client: NobloxClient,
  pageNumber?: number,
  pageSize?: number,
  messageTab?: 'Inbox' | 'Sent' | 'Archive'
) {
  return await client.http<GetMessagesResponse>(`https://privatemessages.roblox.com/v1/messages`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
    searchParams: {
      pageNumber,
      pageSize,
      messageTab,
    },
  })
}
