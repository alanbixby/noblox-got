import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Purchases a product given its id.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param productId The id of the product.
 * @param purchaseDetail The product purchase details.
 * @return OK TODO:
 */
export async function purchaseById(
  client: NobloxClient,
  productId: number,
  purchaseDetail: PurchaseDetailRequest
) {
  return await client.http<PurchaseDetailResponse>(
    `https://economy.roblox.com/v1/purchases/products/${productId}`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        purchaseDetail,
      },
    }
  )
}
