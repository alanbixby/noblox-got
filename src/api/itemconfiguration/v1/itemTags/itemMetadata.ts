import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets the metadata related to item tags
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function itemMetadata(client: NobloxClient) {
  return await client.http<ItemTagsMetadataResponse>(
    `https://itemconfiguration.roblox.com/v1/item-tags/metadata`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
