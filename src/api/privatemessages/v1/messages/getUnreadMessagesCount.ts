import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets unread messages for the authenticated user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getUnreadMessagesCount(client: NobloxClient) {
  return await client.http<UnreadMessagesCountResponse>(
    `https://privatemessages.roblox.com/v1/messages/unread/count`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
