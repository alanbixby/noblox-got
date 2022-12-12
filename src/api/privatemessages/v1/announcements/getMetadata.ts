import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 TODO: DESCRIPTION HERE
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getMetadata(client: NobloxClient) {
  return await client.http<AnnouncementsMetadataResponse>(
    `https://privatemessages.roblox.com/v1/announcements/metadata`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
