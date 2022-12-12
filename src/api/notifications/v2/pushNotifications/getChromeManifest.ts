import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get Chrome Manifest to link GCM project to Chrome Browser
 *
 * @param client the inherited http client and noblox wrapper class
 * @return TODO:
 */
export async function getChromeManifest(client: NobloxClient) {
  return await client.http<ChromeManifestModel>(
    `https://notifications.roblox.com/v2/push-notifications/chrome-manifest`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
