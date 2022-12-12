import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Requests the authenticated user's thumbnail be redrawn
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function redrawThumbnail(client: NobloxClient) {
  return await client.http<EmptyResponse>(`https://avatar.roblox.com/v1/avatar/redraw-thumbnail`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
  })
}
