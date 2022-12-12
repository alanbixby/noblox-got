import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Create a new verified signup voucher
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function createVoucher(client: NobloxClient, request: VerifiedSignupVoucherCreationRequest) {
  return await client.http<VerifiedSignupVoucherCreationResponse>(
    `https://auth.roblox.com/v1/verified-signup/voucher`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
      json: {
        request,
      },
    }
  )
}
