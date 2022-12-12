import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sets the authenticated user's body colors
 *
 * @param client the inherited http client and noblox wrapper class
 * @param bodyColorsModel TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function setBodyColors(client: NobloxClient, bodyColorsModel: BodyColorsModel) {
  return await client.http<ApiSuccessResponse>(`https://avatar.roblox.com/v1/avatar/set-body-colors`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      bodyColorsModel,
    },
  })
}
