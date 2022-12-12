import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Get all emote configurations
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getEmotes(client: NobloxClient) {
  return await client.http<EmoteResponseModel[]>(`https://avatar.roblox.com/v1/emotes`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
    },
  })
}
