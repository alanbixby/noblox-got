import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Returns catalog sorts
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getCatalogSorts(client: NobloxClient) {
  return await client.http<CatalogSortsResponseModel>(`https://catalog.roblox.com/v1/catalog/sorts`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
