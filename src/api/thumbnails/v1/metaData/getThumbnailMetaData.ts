import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Return list of thumbnail meta data.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getThumbnailMetaData(client: NobloxClient) {
  return await client.http<ThumbnailMetaDataResponse>(`https://thumbnails.roblox.com/v1/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
