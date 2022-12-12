import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Adds or updates universe associated with a conversation
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function setConversationUniverse(
  client: NobloxClient,
  requestModel: SetConversationUniverseRequest
) {
  return await client.http<UserVisibleStatusResponse>(
    `https://chat.roblox.com/v2/set-conversation-universe`,
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
