import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the corresponding metadata for the specified notification
 *
 * @param client the inherited http client and noblox wrapper class
 * @param notificationToken Token for the notification
 * @param notificationId Id of the specified notification
 * @return TODO:
 */
export async function getMetadata(client: NobloxClient, notificationToken: string, notificationId: string) {
  return await client.http<GetMetadataResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/metadata`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        notificationToken,
        notificationId,
      },
    }
  )
}
