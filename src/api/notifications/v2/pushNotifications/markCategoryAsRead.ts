import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Mark all notifications in the specified stacking category up until the specified date read
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
 */
export async function markCategoryAsRead(client: NobloxClient, requestModel: MarkCategoryAsReadRequestModel) {
  return await client.http<SuccessResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/mark-category-as-read`,
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
