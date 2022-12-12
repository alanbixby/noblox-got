import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 2D asset try-on endpoint
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetIds assetIds to attempt to try on
 * @param width TODO: DESCRIPTION HERE
 * @param height TODO: DESCRIPTION HERE
 * @param format TODO: DESCRIPTION HERE
 * @param addAccoutrements whether to include currently worn assets in the new outfit
 * @return OK TODO:
 */
export async function tryOn2D(
  client: NobloxClient,
  assetIds: number[],
  width: number,
  height: number,
  format: string,
  addAccoutrements?: boolean
) {
  return await client.http<TryOnModel>(`https://avatar.roblox.com/v1/try-on/2d`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
      isRatelimited: true,
    },
    searchParams: {
      assetIds,
      width,
      height,
      format,
      addAccoutrements,
    },
  })
}
