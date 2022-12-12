import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get the user's description
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getDescription(client: NobloxClient) {
  return await client.http<DescriptionResponse>(`https://accountinformation.roblox.com/v1/description`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
