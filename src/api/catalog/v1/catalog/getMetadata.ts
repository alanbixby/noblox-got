import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Return Metadata for Catalog Webpage
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getMetadata(client: NobloxClient) {
  return await client.http<CatalogMetadataModel>(`https://catalog.roblox.com/v1/catalog/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
