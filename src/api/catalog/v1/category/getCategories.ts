import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Lists Category Names and their Ids
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getCategories(client: NobloxClient) {
  return await client.http<unknown>(`https://catalog.roblox.com/v1/categories`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
