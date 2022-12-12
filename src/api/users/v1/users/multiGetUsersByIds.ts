import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Get users by ids.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The {Roblox.Users.Api.MultiGetByUserIdRequest}.
 * @return OK TODO:
 */
export async function multiGetUsersByIds(client: NobloxClient, request: MultiGetByUserIdRequest) {
  return await client.http<SkinnyUserResponse[]>(`https://users.roblox.com/v1/users`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    json: {
      request,
    },
  })
}
