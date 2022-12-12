import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Deletes an item tag from an item
 *
 * @param client the inherited http client and noblox wrapper class
 * @param itemTagId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function deleteItemTag(client: NobloxClient, itemTagId: string) {
  return await client.http<{}>(`https://itemconfiguration.roblox.com/v1/item-tags/${itemTagId}`, {
    method: 'DELETE',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
  })
}
