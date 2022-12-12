import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Lists a mapping for assets to category IDs to convert from inventory ID to catalog ID. Creates a mapping to link 'Get More' button in inventory page to the relevant catalog page.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getAssetToCategoryMap(client: NobloxClient) {
  return await client.http<unknown>(`https://catalog.roblox.com/v1/asset-to-category`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
