import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets resellable copies of an asset owned by the authenticated user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user id.
 * @param assetId The asset id.
 * @return OK TODO:
 */
export async function getUserResaleRecords(client: NobloxClient, userId: number, assetId: number) {
  return await client.http<ResaleRecordResponse[]>(
    `https://economy.roblox.com/v1/assets/${assetId}/users/${userId}/resellable-copies`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
