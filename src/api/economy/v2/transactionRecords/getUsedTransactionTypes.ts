import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the transaction types that a user has used at any point in their account's lifetime.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getUsedTransactionTypes(client: NobloxClient, userId: number) {
  return await client.http<TransactionUsedTypesResponse>(
    `https://economy.roblox.com/v2/users/${userId}/transaction-types`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
