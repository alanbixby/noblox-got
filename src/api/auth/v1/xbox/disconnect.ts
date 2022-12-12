import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Unlink the current ROBLOX account from the Xbox live account.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function disconnect(client: NobloxClient) {
  return await client.http<ApiSuccessResponse>(`https://auth.roblox.com/v1/xbox/disconnect`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
  })
}
