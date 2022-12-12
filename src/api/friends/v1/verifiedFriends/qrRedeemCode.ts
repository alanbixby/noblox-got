import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Redeems QR code
 *
 * @param client the inherited http client and noblox wrapper class
 * @param code TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function qrRedeemCode(client: NobloxClient, code: string) {
  return await client.http<QRFriendsRedeemResponseModel>(
    `https://friends.roblox.com/v1/friends/verified/qr/${code}/redeem`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
    }
  )
}
