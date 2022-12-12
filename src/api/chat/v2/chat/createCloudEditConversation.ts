import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Creates a new cloud edit conversation
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function createCloudEditConversation(
  client: NobloxClient,
  requestModel: CreateCloudEditConversationRequest
) {
  return await client.http<StartNewConversationResponse>(
    `https://chat.roblox.com/v2/start-cloud-edit-conversation`,
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
