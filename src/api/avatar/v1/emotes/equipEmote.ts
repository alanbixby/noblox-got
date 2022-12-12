import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Equip an emote asset in specific positions
 *
 * @param client the inherited http client and noblox wrapper class
 * @param assetId TODO: DESCRIPTION HERE
 * @param position TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function equipEmote(client: NobloxClient, assetId: number, position: number) {
  return await client.http<{}>(`https://avatar.roblox.com/v1/emotes/${assetId}/${position}`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
