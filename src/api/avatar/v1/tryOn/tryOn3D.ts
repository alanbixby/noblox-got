import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 3D asset try-on endpoint
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetIds assetIds to attempt to try on
 * @param addAccoutrements whether to use currently worn assets in the new outfit
 * @return OK TODO:
 */
export async function tryOn3D(client: NobloxClient, assetIds: number[], addAccoutrements?: boolean) {
  return await client.http<TryOnModel>(`https://avatar.roblox.com/v1/try-on/3d`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
      isRatelimited: true,
    },
    searchParams: {
      assetIds,
      addAccoutrements,
    },
  })
}
