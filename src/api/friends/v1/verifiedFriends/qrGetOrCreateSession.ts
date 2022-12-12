import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Get or Create a session for authenticated user
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function qrGetOrCreateSession(client: NobloxClient) {
  return await client.http<QRSessionResponseModel>(
    `https://friends.roblox.com/v1/friends/verified/qr/session`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
    }
  )
}
