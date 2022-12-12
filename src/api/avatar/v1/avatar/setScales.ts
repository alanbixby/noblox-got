import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sets the authenticated user's scales
 *
 * @param client the inherited http client and noblox wrapper class
 * @param scalesModel TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function setScales(client: NobloxClient, scalesModel: ScaleModel) {
  return await client.http<ApiSuccessResponse>(`https://avatar.roblox.com/v1/avatar/set-scales`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      scalesModel,
    },
  })
}
