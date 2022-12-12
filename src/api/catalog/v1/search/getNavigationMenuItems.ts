import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Return Navigation Menu Items for Catalog Webpage
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getNavigationMenuItems(client: NobloxClient) {
  return await client.http<CatalogMenuItemsResponseModel>(
    `https://catalog.roblox.com/v1/search/navigation-menu-items`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
