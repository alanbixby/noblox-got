import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Updates a social link
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The id of the universe
 * @param socialLinkId The id of the social link being updated
 * @param request The {Roblox.Groups.Api.SocialLinkRequest}.
 * @return OK TODO:
 */
export async function updateSocialLink(
  client: NobloxClient,
  groupId: number,
  socialLinkId: number,
  request: SocialLinkRequest
) {
  return await client.http<{}>(
    `https://groups.roblox.com/v1/groups/${groupId}/social-links/${socialLinkId}`,
    {
      method: 'PATCH',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        request,
      },
    }
  )
}
