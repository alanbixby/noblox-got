import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Marks Interaction status for push notification
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function markInteraction(client: NobloxClient, requestModel: MarkInteractionRequestModel) {
  return await client.http<SuccessResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/mark-interaction`,
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
