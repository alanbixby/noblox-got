import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets Group configuration contextual information
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getGroupConfigurationDisplayOptions(client: NobloxClient) {
  return await client.http<GroupConfigurationDisplayOptionsResponse>(
    `https://groups.roblox.com/v1/groups/configuration/metadata`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
