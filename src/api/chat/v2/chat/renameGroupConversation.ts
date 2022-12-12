import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Renames the title of an existing conversation
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function renameGroupConversation(
  client: NobloxClient,
  requestModel: RenameGroupConversationRequest
) {
  return await client.http<RenameConversationResponse>(
    `https://chat.roblox.com/v2/rename-group-conversation`,
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
