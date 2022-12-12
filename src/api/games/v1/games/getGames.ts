import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets a list of games
 *
 * @param client the inherited http client and noblox wrapper class
 * @param modelSortToken Sort token.
 * @param modelGameFilter Game filter.
 * @param modelTimeFilter Time filter.
 * @param modelGenreFilter Genre filter.
 * @param modelExclusiveStartId Id to start getting entities.
 * @param modelSortOrder Sort order.
 * @param modelGameSetTargetId Extra id needed for specific Game Sets.
 * @param modelKeyword Keyword
 * @param modelStartRows StartRows
 * @param modelMaxRows MaxRows
 * @param modelContextCountryRegionId ContextCountryRegionId
 * @param modelContextUniverseId ContextUniverseId
 * @param modelPageContextPageId Id to identify the page as shown to the user.
 * @param modelPageContextIsSeeAllPage SortPosition
 * @param modelSortPosition SortPosition
 * @return OK TODO:
 */
export async function getGames(
  client: NobloxClient,
  modelSortToken?: string,
  modelGameFilter?: string,
  modelTimeFilter?: string,
  modelGenreFilter?: string,
  modelExclusiveStartId?: number,
  modelSortOrder?: number,
  modelGameSetTargetId?: number,
  modelKeyword?: string,
  modelStartRows?: number,
  modelMaxRows?: number,
  modelContextCountryRegionId?: number,
  modelContextUniverseId?: number,
  modelPageContextPageId?: string,
  modelPageContextIsSeeAllPage?: boolean,
  modelSortPosition?: number
) {
  return await client.http<GamesSearchResponse>(`https://games.roblox.com/v1/games/list`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      'model.sortToken': modelSortToken,
      'model.gameFilter': modelGameFilter,
      'model.timeFilter': modelTimeFilter,
      'model.genreFilter': modelGenreFilter,
      'model.exclusiveStartId': modelExclusiveStartId,
      'model.sortOrder': modelSortOrder,
      'model.gameSetTargetId': modelGameSetTargetId,
      'model.keyword': modelKeyword,
      'model.startRows': modelStartRows,
      'model.maxRows': modelMaxRows,
      'model.contextCountryRegionId': modelContextCountryRegionId,
      'model.contextUniverseId': modelContextUniverseId,
      'model.pageContext.pageId': modelPageContextPageId,
      'model.pageContext.isSeeAllPage': modelPageContextIsSeeAllPage,
      'model.sortPosition': modelSortPosition,
    },
  })
}
