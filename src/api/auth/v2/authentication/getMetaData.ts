import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets Auth meta data
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getMetaData(client: NobloxClient) {
  return await client.http<AuthMetaDataResponse>(`https://auth.roblox.com/v2/auth/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
