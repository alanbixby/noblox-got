import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sends an email of all accounts belonging to an email
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function recoverUsername(client: NobloxClient, request: RecoverUsernameRequest) {
  return await client.http<RecoverUsernameResponse>(`https://auth.roblox.com/v1/usernames/recover`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
