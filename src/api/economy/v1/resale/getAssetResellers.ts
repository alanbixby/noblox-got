import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets available resale copies of an asset.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId The asset id.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getAssetResellers(
  client: NobloxClient,
  assetId: number,
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<ResaleRecordResponse[]>(
    `https://economy.roblox.com/v1/assets/${assetId}/resellers`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      searchParams: {
        limit,
        cursor,
      },
    }
  )
}
