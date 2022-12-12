import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Mark the specified conversation messages as read
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function markAsRead(client: NobloxClient, requestModel: MarkAsReadRequest) {
  return await client.http<MarkAsReadResponse>(`https://chat.roblox.com/v2/mark-as-read`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      requestModel,
    },
  })
}
