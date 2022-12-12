import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Returns the business rules related to avatars
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function getAvatarRulesModel(client: NobloxClient) {
  return await client.http<AvatarRulesModel>(`https://avatar.roblox.com/v1/avatar-rules`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
