import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Register User Presence for IOS, Android, Xbox, regular studio session
 *
 * @param client the inherited http client and noblox wrapper class
 * @param registerAppPresenceRequest TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function registerAppPresence(
  client: NobloxClient,
  registerAppPresenceRequest: RegisterAppPresenceRequest
) {
  return await client.http<{}>(`https://presence.roblox.com/v1/presence/register-app-presence`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      registerAppPresenceRequest,
    },
  })
}
