import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get Verified Phone Number
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getVerifiedPhone(client: NobloxClient) {
  return await client.http<PhoneResponse>(`https://accountinformation.roblox.com/v1/phone`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
