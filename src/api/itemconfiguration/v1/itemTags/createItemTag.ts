import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Creates a new item tag
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function createItemTag(client: NobloxClient, request: CreateItemTagRequest) {
  return await client.http<ItemTagDetails>(`https://itemconfiguration.roblox.com/v1/item-tags`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    json: {
      request,
    },
  })
}
