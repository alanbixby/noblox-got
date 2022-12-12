import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets the user created asset information filtered by the given asset type
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetType TODO: DESCRIPTION HERE
 * @param isArchived TODO: DESCRIPTION HERE
 * @param groupId TODO: DESCRIPTION HERE
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getAssetCreationsByAssetType(
  client: NobloxClient,
  assetType: string,
  isArchived?: boolean,
  groupId?: number,
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<AssetCreationsResponse[]>(
    `https://itemconfiguration.roblox.com/v1/creations/get-assets`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
        isRatelimited: true,
      },
      searchParams: {
        assetType,
        isArchived,
        groupId,
        limit,
        cursor,
      },
    }
  )
}
