import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Marks the specified notification as read.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function markAsRead(client: NobloxClient, requestModel: MarkAsReadRequestModel) {
  return await client.http<SuccessResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/mark-as-read`,
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
