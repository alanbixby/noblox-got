import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sets the avatar's current emotes to the list
 *
 * @param client the inherited http client and noblox wrapper class
 * @param emoteRequestModels The list of emotes
 * @return OK TODO:
 */
export async function setAllEmotes(client: NobloxClient, emoteRequestModels: EmoteRequestModel) {
  return await client.http<SetAllEmotesResponseModel>(`https://avatar.roblox.com/v1/emotes/set-all-emotes`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      emoteRequestModels,
    },
  })
}
