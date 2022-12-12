import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Tries to get a valid username if the current username is taken
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestBodyUsername Gets or sets the username to use as the base username provided by the user
 * @param requestBodyBirthday Gets or sets the birth day.
 * @return OK TODO:
 */
export async function getRecommendedUsername(
  client: NobloxClient,
  requestBodyUsername?: string,
  requestBodyBirthday?: string
) {
  return await client.http<RecommendedUsernameResponse>(`https://auth.roblox.com/v1/validators/username`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      'requestBody.username': requestBodyUsername,
      'requestBody.birthday': requestBodyBirthday,
    },
  })
}
