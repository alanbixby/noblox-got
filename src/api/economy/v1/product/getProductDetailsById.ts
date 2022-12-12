import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Retrieves the product purchasable details given its id.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param productId The id of the product.
 * @param showPurchasable true if purchase validation is needed.
 * @return OK TODO:
 */
export async function getProductDetailsById(
  client: NobloxClient,
  productId: number,
  showPurchasable?: boolean
) {
  return await client.http<PurchasableDetailResponse>(`https://economy.roblox.com/v1/products/${productId}`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
    searchParams: {
      showPurchasable,
    },
  })
}
