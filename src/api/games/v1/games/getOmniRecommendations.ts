import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Endpoint for omni recommendations
 *
 * @param client the inherited http client and noblox wrapper class
 * @param modelPageType PageType to determine which recommendations are being requested.
 * @param modelSessionId Id to specify a session
 * @return OK TODO:
 */
export async function getOmniRecommendations(
  client: NobloxClient,
  modelPageType?: 'Invalid' | 'Home' | 'Games',
  modelSessionId?: string
) {
  return await client.http<OmniRecommendationsResponse>(
    `https://games.roblox.com/v1/games/omni-recommendations`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        'model.pageType': modelPageType,
        'model.sessionId': modelSessionId,
      },
    }
  )
}
