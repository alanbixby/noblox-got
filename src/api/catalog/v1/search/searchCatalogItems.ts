import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Search for avatarCatalog item ids
 *
 * @param client the inherited http client and noblox wrapper class
 * @param modelCategory TODO: DESCRIPTION HERE
 * @param modelSubcategory TODO: DESCRIPTION HERE
 * @param modelSortAggregation TODO: DESCRIPTION HERE
 * @param modelSortCurrency TODO: DESCRIPTION HERE
 * @param modelGenres TODO: DESCRIPTION HERE
 * @param modelSortType TODO: DESCRIPTION HERE
 * @param modelCreatorType TODO: DESCRIPTION HERE
 * @param modelPremiumBenefitFilterType TODO: DESCRIPTION HERE
 * @param modelCreatorTargetId TODO: DESCRIPTION HERE
 * @param modelCreatorName TODO: DESCRIPTION HERE
 * @param modelMaxPrice TODO: DESCRIPTION HERE
 * @param modelMinPrice TODO: DESCRIPTION HERE
 * @param modelKeyword TODO: DESCRIPTION HERE
 * @param modelIncludeNotForSale TODO: DESCRIPTION HERE
 * @param modelTagNames TODO: DESCRIPTION HERE
 * @param sortOrder The order the results are sorted in.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function searchCatalogItems(
  client: NobloxClient,
  modelCategory?:
    | 'Accessories'
    | 'All'
    | 'AvatarAnimations'
    | 'BodyParts'
    | 'Clothing'
    | 'Collectibles'
    | 'Featured'
    | 'Gear'
    | 'CommunityCreations'
    | 'Premium'
    | 'Recommended',
  modelSubcategory?:
    | 'Accessories'
    | 'All'
    | 'AvatarAnimations'
    | 'BackAccessories'
    | 'BodyParts'
    | 'Clothing'
    | 'Collectibles'
    | 'FaceAccessories'
    | 'Faces'
    | 'Featured'
    | 'FrontAccessories'
    | 'Gear'
    | 'HairAccessories'
    | 'Hats'
    | 'Heads'
    | 'NeckAccessories'
    | 'Pants'
    | 'Shirts'
    | 'ShoulderAccessories'
    | 'Tshirts'
    | 'WaistAccessories'
    | 'Bundles'
    | 'AnimationBundles'
    | 'EmoteAnimations'
    | 'CommunityCreations'
    | 'Melee'
    | 'Ranged'
    | 'Explosive'
    | 'PowerUp'
    | 'Navigation'
    | 'Musical'
    | 'Social'
    | 'Building'
    | 'Transport'
    | 'Premium'
    | 'Recommended',
  modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime',
  modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free',
  modelGenres?: string[],
  modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc',
  modelCreatorType?: 'User' | 'Group',
  modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly',
  modelCreatorTargetId?: number,
  modelCreatorName?: string,
  modelMaxPrice?: number,
  modelMinPrice?: number,
  modelKeyword?: string,
  modelIncludeNotForSale?: boolean,
  modelTagNames?: string[],
  sortOrder: 'Asc' | 'Desc' = 'Desc',
  limit: 10 | 28 | 30 | 50 | 60 | 100 = 100,
  cursor?: string
) {
  return await client.http<CatalogSearchResponseItem[]>(`https://catalog.roblox.com/v1/search/items`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
      isRatelimited: true,
    },
    searchParams: {
      'model.category': modelCategory,
      'model.subcategory': modelSubcategory,
      'model.sortAggregation': modelSortAggregation,
      'model.sortCurrency': modelSortCurrency,
      'model.genres': modelGenres,
      'model.sortType': modelSortType,
      'model.creatorType': modelCreatorType,
      'model.premiumBenefitFilterType': modelPremiumBenefitFilterType,
      'model.creatorTargetId': modelCreatorTargetId,
      'model.creatorName': modelCreatorName,
      'model.maxPrice': modelMaxPrice,
      'model.minPrice': modelMinPrice,
      'model.keyword': modelKeyword,
      'model.includeNotForSale': modelIncludeNotForSale,
      'model.tagNames': modelTagNames,
      sortOrder,
      limit,
      cursor,
    },
  })
}
