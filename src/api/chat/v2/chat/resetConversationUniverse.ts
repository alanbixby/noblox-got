import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Removes universe associated with a conversation
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function resetConversationUniverse(
  client: NobloxClient,
  requestModel: ResetConversationUniverseRequest
) {
  return await client.http<UserVisibleStatusResponse>(
    `https://chat.roblox.com/v2/reset-conversation-universe`,
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
