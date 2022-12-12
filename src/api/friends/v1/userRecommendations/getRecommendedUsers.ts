import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * 🔒 Return a list of Recommendations for the Authenticated User.
V1 API to just return list of existing friends for the Authenticated user.
      * 
 * @param client the inherited http client and noblox wrapper class
 * @return Successfully returns list of recommendations.
      */
export async function getRecommendedUsers(client: NobloxClient) {
  return await client.http<UserRecommendationsResponse>(`https://friends.roblox.com/v1/recommended-users`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
  })
}
