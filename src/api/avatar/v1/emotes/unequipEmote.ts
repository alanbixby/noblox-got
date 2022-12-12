import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Unequip an emote from specified positions
 *
 * @param client the inherited http client and noblox wrapper class
 * @param position The user's emote position to unequip
 * @return OK TODO:
 */
export async function unequipEmote(client: NobloxClient, position: number) {
  return await client.http<{}>(`https://avatar.roblox.com/v1/emotes/${position}`, {
    method: 'DELETE',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
