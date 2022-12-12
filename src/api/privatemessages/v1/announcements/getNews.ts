import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Migrate from RobloxWebsite project, return news notification for Private Message page
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getNews(client: NobloxClient) {
  return await client.http<GetAnnouncementsResponse>(`https://privatemessages.roblox.com/v1/announcements`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
