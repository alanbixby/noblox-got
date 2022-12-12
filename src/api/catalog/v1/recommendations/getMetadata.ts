import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Return Metadata for Recommendations Component based on the page it is used on
 *
 * @param client the inherited http client and noblox wrapper class
 * @param page TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getMetadata(client: NobloxClient, page?: string) {
  return await client.http<RecommendationsMetadataModel>(
    `https://catalog.roblox.com/v1/recommendations/metadata`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        page,
      },
    }
  )
}
