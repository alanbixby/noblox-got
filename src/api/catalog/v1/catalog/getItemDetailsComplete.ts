import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Returns catalog item details, complete with user ownership and economy information
 *
 * @param client the inherited http client and noblox wrapper class
 * @param itemId long, id of the asset or bundle
 * @param itemType String, asset or bundle only
 * @return OK TODO:
 */
export async function getItemDetailsComplete(client: NobloxClient, itemId: number, itemType: string) {
  return await client.http<CatalogSearchDetailedCompleteResponseItem>(
    `https://catalog.roblox.com/v1/catalog/items/${itemId}/details`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
        isRatelimited: true,
      },
      searchParams: {
        itemType,
      },
    }
  )
}
