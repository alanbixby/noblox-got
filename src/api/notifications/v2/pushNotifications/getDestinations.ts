import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets valid destinations associated with the signed user
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function getDestinations(client: NobloxClient) {
  return await client.http<GetPushDestinationsResponseModel>(
    `https://notifications.roblox.com/v2/push-notifications/get-destinations`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
