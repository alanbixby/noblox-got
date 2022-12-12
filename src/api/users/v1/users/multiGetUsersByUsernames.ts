import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get users by usernames.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The {Roblox.Users.Api.MultiGetByUsernameRequest}.
 * @return OK TODO:
 */
export async function multiGetUsersByUsernames(client: NobloxClient, request: MultiGetByUsernameRequest) {
  return await client.http<MultiGetUserByNameResponse[]>(`https://users.roblox.com/v1/usernames/users`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    json: {
      request,
    },
  })
}
