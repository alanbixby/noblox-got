import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Returns list of item details
 *
 * @param client the inherited http client and noblox wrapper class
 * @param model {Roblox.Catalog.Api.MultigetItemDetailsRequestModel}
 * @return OK TODO:
 */
export async function getItemDetails(client: NobloxClient, model: MultigetItemDetailsRequestModel) {
  return await client.http<CatalogSearchDetailedResponseItem[]>(
    `https://catalog.roblox.com/v1/catalog/items/details`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
      json: {
        model,
      },
    }
  )
}
