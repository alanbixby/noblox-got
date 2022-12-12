import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get the user's birthdate
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getBirthdate(client: NobloxClient) {
  return await client.http<BirthdateResponse>(`https://accountinformation.roblox.com/v1/birthdate`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
