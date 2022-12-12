import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Marks a Notification Stream Entry as Interacted
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel eventId (Guid) : Id corresponding to the Notification stream Entry to be marked as Interacted
 * @return TODO:
 */
export async function markStreamEntryInteracted(
  client: NobloxClient,
  requestModel: MarkInteractedRequestModel
) {
  return await client.http<SuccessResponseModel>(
    `https://notifications.roblox.com/v2/stream-notifications/mark-interacted`,
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
