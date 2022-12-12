import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Archives a batch of messages.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param batchMessagesRequest TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function archiveMessages(client: NobloxClient, batchMessagesRequest: BatchMessagesRequest) {
  return await client.http<BatchMessagesResponse>(`https://privatemessages.roblox.com/v1/messages/archive`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      batchMessagesRequest,
    },
  })
}
