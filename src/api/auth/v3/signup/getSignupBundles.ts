import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets the avatar bundles that are displayed at signup
 *
 * @param client the inherited http client and noblox wrapper class
 * @return Success
 */
export async function getSignupBundles(client: NobloxClient) {
  return await client.http<SignupBundlesResponse>(`https://auth.roblox.com/v3/signup/bundles`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
