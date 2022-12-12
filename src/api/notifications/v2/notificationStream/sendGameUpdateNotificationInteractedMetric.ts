import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * 🔐 Sends metrics for when a Game Update Notification as Interacted. This differs from an the MarkStreamEntryInteracted function because it comes from an interaction
              on the Game Update Notifications section not the aggregated Notification Stream view
      * 
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return TODO:
      */
export async function sendGameUpdateNotificationInteractedMetric(
  client: NobloxClient,
  requestModel: GameUpdateNotificationInteractedRequestModel
) {
  return await client.http<SuccessResponseModel>(
    `https://notifications.roblox.com/v2/stream-notifications/game-update-notification-interacted`,
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
