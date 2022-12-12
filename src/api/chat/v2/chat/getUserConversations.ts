import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets all conversations associated with the logged-in User
 *
 * @param client the inherited http client and noblox wrapper class
 * @param pageNumber TODO: DESCRIPTION HERE
 * @param pageSize TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function getUserConversations(client: NobloxClient, pageNumber: number, pageSize: number) {
  return await client.http<Conversation[]>(`https://chat.roblox.com/v2/get-user-conversations`, {
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
