import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Get social link data associated with a game
 *
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The Id of the game
 * @return OK TODO:
 */
export async function getSocialLinks(client: NobloxClient, universeId: number) {
  return await client.http<SocialLinkResponse[]>(
    `https://games.roblox.com/v1/games/${universeId}/social-links/list`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
