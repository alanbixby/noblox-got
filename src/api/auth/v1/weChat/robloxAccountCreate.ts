import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Endpoint for creating a roblox account by openId
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request TODO: DESCRIPTION HERE
 * @param apiKey TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function robloxAccountCreate(
  client: NobloxClient,
  request: RobloxAccountCreateRequest,
  apiKey?: string
) {
  return await client.http<RobloxAccountCreateResponse>(
    `https://auth.roblox.com/v1/wechat/roblox-account-create`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
      },
      json: {
        request,
      },
      searchParams: {
        apiKey,
      },
    }
  )
}
