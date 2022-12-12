import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Gets the rollout settings for requested feature
 *
 * @param client the inherited http client and noblox wrapper class
 * @param featureNames string array to request feature rollout settings
 * @return TODO:
 */
export async function getRolloutSettings(client: NobloxClient, featureNames: string[]) {
  return await client.http<RolloutSettingsResponse>(`https://chat.roblox.com/v2/get-rollout-settings`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
    searchParams: {
      featureNames,
    },
  })
}
