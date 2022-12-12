import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Opts out from the specified notification receiver destination types
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return Http response message
 */
export async function optOutOfReceiverDestinationType(
  client: NobloxClient,
  requestModel: ReceiverDestinationTypeModel
) {
  return await client.http<unknown>(
    `https://notifications.roblox.com/v2/notifications/receiver-destination-types/opt-out`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        requestModel,
      },
    }
  )
}
