import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Validate a display name for a new user.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param displayName The display name.
 * @param birthdate The new user's birthdate
 * @return OK TODO:
 */
export async function validateNewUserDisplayName(
  client: NobloxClient,
  displayName: string,
  birthdate: string
) {
  return await client.http<{}>(`https://users.roblox.com/v1/display-names/validate`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
      isRatelimited: true,
    },
    searchParams: {
      displayName,
      birthdate,
    },
  })
}
