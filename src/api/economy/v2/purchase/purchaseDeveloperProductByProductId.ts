import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Purchases a User Product given its product id.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param productId The id of the product.
 * @param purchaseDetail The product purchase details.
 * @return OK TODO:
 */
export async function purchaseDeveloperProductByProductId(
  client: NobloxClient,
  productId: number,
  purchaseDetail: PurchaseRequest
) {
  return await client.http<PurchaseResponse>(
    `https://economy.roblox.com/v2/developer-products/${productId}/purchase`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'REQUIRED',
      },
      json: {
        purchaseDetail,
      },
    }
  )
}
