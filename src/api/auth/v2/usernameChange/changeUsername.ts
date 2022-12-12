import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Change the user's username
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The {Roblox.Authentication.Api.Models.UsernameChangeRequest}
 * @return OK TODO:
 */
export async function changeUsername(client: NobloxClient, request: UsernameChangeRequest) {
  return await client.http<{}>(`https://auth.roblox.com/v2/username`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
