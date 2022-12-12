import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get Notification Stream metadata.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getMetadata(client: NobloxClient) {
  return await client.http<NotificationStreamMetadataResponse>(
    `https://notifications.roblox.com/v2/stream-notifications/metadata`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
