import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * 🔒 Get games recommendations
      * 
 * @param client the inherited http client and noblox wrapper class
 * @param algorithmName The algorithm name of recommendations
 * @param modelPaginationKey The key of a page, which includes the start row index and all other necessary information to query the data.
This parameter is usually not needed for the first page.
 * @param modelMaxRows The requested number of rows.
 * @param modelIsTruncatedResultsEnabled Truncated Results
 * @return OK TODO:
      */
export async function recommendations(
  client: NobloxClient,
  algorithmName: string,
  modelPaginationKey?: string,
  modelMaxRows?: number,
  modelIsTruncatedResultsEnabled?: boolean
) {
  return await client.http<GameRecommendationsResponse>(
    `https://games.roblox.com/v1/games/recommendations/algorithm/${algorithmName}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        'model.paginationKey': modelPaginationKey,
        'model.maxRows': modelMaxRows,
        'model.isTruncatedResultsEnabled': modelIsTruncatedResultsEnabled,
      },
    }
  )
}
