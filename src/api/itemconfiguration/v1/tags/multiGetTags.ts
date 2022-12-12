import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets the information for a list of tag Ids
 *
 * @param client the inherited http client and noblox wrapper class
 * @param tagIds TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function multiGetTags(client: NobloxClient, tagIds: string[]) {
  return await client.http<TagDetails[]>(`https://itemconfiguration.roblox.com/v1/tags`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
      isRatelimited: true,
    },
    searchParams: {
      tagIds,
    },
  })
}
