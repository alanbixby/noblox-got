import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Sets the authenticated user's primary group
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The request body containing the group id.
 * @return OK TODO:
 */
export async function setPrimaryGroup(client: NobloxClient, request: PrimaryGroupRequest) {
  return await client.http<{}>(`https://groups.roblox.com/v1/user/groups/primary`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
