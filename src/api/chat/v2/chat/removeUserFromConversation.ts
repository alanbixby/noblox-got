import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Removes a user from an existing conversation
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function removeUserFromConversation(
  client: NobloxClient,
  requestModel: RemoveUserFromConversationRequest
) {
  return await client.http<RemoveUserFromConversationResponse>(
    `https://chat.roblox.com/v2/remove-from-conversation`,
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
