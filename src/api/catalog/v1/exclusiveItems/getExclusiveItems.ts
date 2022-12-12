import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Lists the exclusive catalog items for a particular app store.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param appStoreType TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getExclusiveItems(
  client: NobloxClient,
  appStoreType: 'GooglePlay' | 'Amazon' | 'iOS' | 'Xbox'
) {
  return await client.http<CatalogItemModel[]>(
    `https://catalog.roblox.com/v1/exclusive-items/${appStoreType}/bundles`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
