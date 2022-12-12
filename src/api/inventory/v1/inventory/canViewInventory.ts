import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets whether the specified user's inventory can be viewed.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user identifier.
 * @return OK TODO:
 */
export async function canViewInventory(client: NobloxClient, userId: number) {
  return await client.http<CanViewInventoryResponse>(
    `https://inventory.roblox.com/v1/users/${userId}/can-view-inventory`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'PUBLIC',
      },
    }
  )
}
