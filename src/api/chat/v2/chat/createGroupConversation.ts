import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Creates a new group conversation
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function createGroupConversation(
  client: NobloxClient,
  requestModel: CreateGroupConversationRequest
) {
  return await client.http<StartNewConversationResponse>(
    `https://chat.roblox.com/v2/start-group-conversation`,
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
