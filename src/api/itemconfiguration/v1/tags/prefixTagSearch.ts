import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Searches for up to {numberOfResults} tags based on the given {prefix}
 *
 * @param client the inherited http client and noblox wrapper class
 * @param prefix TODO: DESCRIPTION HERE
 * @param numberOfResults Must be 1, 5, 10, or 25
 * @return OK TODO:
 */
export async function prefixTagSearch(client: NobloxClient, prefix: string, numberOfResults: number) {
  return await client.http<TagDetails[]>(`https://itemconfiguration.roblox.com/v1/tags/prefix-search`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
      isRatelimited: true,
    },
    searchParams: {
      prefix,
      numberOfResults,
    },
  })
}
