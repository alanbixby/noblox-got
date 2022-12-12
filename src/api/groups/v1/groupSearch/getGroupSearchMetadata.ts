import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get suggested groups and other miscellaneous information needed for the group/join page like flags
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getGroupSearchMetadata(client: NobloxClient) {
  return await client.http<GroupSearchMetadataResponse>(
    `https://groups.roblox.com/v1/groups/search/metadata`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
