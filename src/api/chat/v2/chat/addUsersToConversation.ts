import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Adds users to an existing conversation
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function addUsersToConversation(
  client: NobloxClient,
  requestModel: AddUsersToConversationRequest
) {
  return await client.http<AddUserToConversationResponse>(`https://chat.roblox.com/v2/add-to-conversation`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      requestModel,
    },
  })
}
