import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * 🔓 Gets owned items of the specified item type. Game Servers can make requests for any user, but can only make requests for game passes that belong to the place sending the request.
Place creators can make requests as if they were the Game Server.
      * 
 * @param client the inherited http client and noblox wrapper class
 * @param userId ID of the user in question
 * @param itemType Type of the item in question (ie. Asset, GamePass)
 * @param itemTargetId ID of the item in question
 * @return OK TODO:
      */
export async function getInventoryItems(
  client: NobloxClient,
  userId: number,
  itemType: 'Asset' | 'GamePass' | 'Badge' | 'Bundle',
  itemTargetId: number
) {
  return await client.http<IItemModel[]>(
    `https://inventory.roblox.com/v1/users/${userId}/items/${itemType}/${itemTargetId}`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
    }
  )
}
