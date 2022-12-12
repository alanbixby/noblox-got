import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Deletes a social link
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The id of the game you are editting, required for permissions checking
 * @param socialLinkId The id of the social link
 * @return OK TODO:
 */
export async function deleteSocialLink(client: NobloxClient, groupId: number, socialLinkId: number) {
  return await client.http<{}>(
    `https://groups.roblox.com/v1/groups/${groupId}/social-links/${socialLinkId}`,
    {
      method: 'DELETE',
      context: {
        authenticationLevel: 'PROTECTED',
      },
    }
  )
}
