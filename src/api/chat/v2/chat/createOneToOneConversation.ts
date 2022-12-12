import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Creates a new one-on-one conversation
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function createOneToOneConversation(
  client: NobloxClient,
  requestModel: CreateOneToOneConversationRequest
) {
  return await client.http<StartNewConversationResponse>(
    `https://chat.roblox.com/v2/start-one-to-one-conversation`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        requestModel,
      },
    }
  )
}
