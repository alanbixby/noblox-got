import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Marks a batch of messages as read.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param batchMessagesRequest TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function markMessagesRead(client: NobloxClient, batchMessagesRequest: BatchMessagesRequest) {
  return await client.http<BatchMessagesResponse>(
    `https://privatemessages.roblox.com/v1/messages/mark-read`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        batchMessagesRequest,
      },
    }
  )
}
