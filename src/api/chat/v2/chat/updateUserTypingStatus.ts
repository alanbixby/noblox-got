import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates the status for whether a user is typing currently
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function updateUserTypingStatus(
  client: NobloxClient,
  requestModel: UpdateUserTypingStatusRequest
) {
  return await client.http<UserVisibleStatusResponse>(
    `https://chat.roblox.com/v2/update-user-typing-status`,
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
