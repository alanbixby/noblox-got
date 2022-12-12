import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Posts a social links
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The id of the game
 * @param request The {Roblox.Groups.Api.SocialLinkRequest}
 * @return OK TODO:
 */
export async function postSocialLink(client: NobloxClient, groupId: number, request: SocialLinkRequest) {
  return await client.http<SocialLinkResponse>(
    `https://groups.roblox.com/v1/groups/${groupId}/social-links`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        request,
      },
    }
  )
}
