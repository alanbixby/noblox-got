import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Mark the specified conversation messages as seen
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function markAsSeen(client: NobloxClient, requestModel: MarkAsSeenRequest) {
  return await client.http<MarkAsSeenResponse>(`https://chat.roblox.com/v2/mark-as-seen`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      requestModel,
    },
  })
}
