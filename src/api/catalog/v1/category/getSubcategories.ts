import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Lists Subcategory Names and their Ids
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getSubcategories(client: NobloxClient) {
  return await client.http<unknown>(`https://catalog.roblox.com/v1/subcategories`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
