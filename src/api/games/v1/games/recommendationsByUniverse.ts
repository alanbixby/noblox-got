import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * ✅ Get games recommendations based on a given universe
      * 
 * @param client the inherited http client and noblox wrapper class
 * @param universeId The universe to base recommendations on
 * @param modelPaginationKey The key of a page, which includes the start row index and all other necessary information to query the data.
This parameter is usually not needed for the first page.
 * @param modelMaxRows The requested number of rows.
 * @param modelIsTruncatedResultsEnabled Truncated Results
 * @return OK TODO:
      */
export async function recommendationsByUniverse(
  client: NobloxClient,
  universeId: number,
  modelPaginationKey?: string,
  modelMaxRows?: number,
  modelIsTruncatedResultsEnabled?: boolean
) {
  return await client.http<GameRecommendationsResponse>(
    `https://games.roblox.com/v1/games/recommendations/game/${universeId}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
      searchParams: {
        'model.paginationKey': modelPaginationKey,
        'model.maxRows': modelMaxRows,
        'model.isTruncatedResultsEnabled': modelIsTruncatedResultsEnabled,
      },
    }
  )
}
