import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets all related item tags for each item id listed
 *
 * @param client the inherited http client and noblox wrapper class
 * @param itemIds TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function multiGetItemsWithTags(client: NobloxClient, itemIds: string[]) {
  return await client.http<ItemWithTags[]>(`https://itemconfiguration.roblox.com/v1/item-tags`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
      isRatelimited: true,
    },
    searchParams: {
      itemIds,
    },
  })
}
