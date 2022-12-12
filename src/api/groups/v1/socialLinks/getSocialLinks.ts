import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Get social link data associated with a group
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The Id of the game
 * @return OK TODO:
 */
export async function getSocialLinks(client: NobloxClient, groupId: number) {
  return await client.http<SocialLinkResponse[]>(
    `https://groups.roblox.com/v1/groups/${groupId}/social-links`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
