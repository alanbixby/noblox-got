import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the metadata related to assets and bundles
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function itemMetadata(client: NobloxClient) {
  return await client.http<ItemMetadataResponse>(`https://itemconfiguration.roblox.com/v1/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
