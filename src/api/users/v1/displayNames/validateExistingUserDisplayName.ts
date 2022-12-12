import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Validate a display name for an existing user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user id.
 * @param displayName The display name.
 * @return OK TODO:
 */
export async function validateExistingUserDisplayName(
  client: NobloxClient,
  userId: number,
  displayName: string
) {
  return await client.http<{}>(`https://users.roblox.com/v1/users/${userId}/display-names/validate`, {
    method: 'GET',
    context: {
      authenticationLevel: 'OPTIONAL',
      isRatelimited: true,
    },
    searchParams: {
      displayName,
    },
  })
}
