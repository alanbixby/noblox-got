import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get the user's gender
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getGender(client: NobloxClient) {
  return await client.http<GenderResponse>(`https://accountinformation.roblox.com/v1/gender`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
