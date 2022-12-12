import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Puts the asset on the authenticated user's avatar.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId The asset id.
 * @return TODO:
 */
export async function wearAsset(client: NobloxClient, assetId: number) {
  return await client.http<ApiSuccessResponse>(`https://avatar.roblox.com/v1/avatar/assets/${assetId}/wear`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
