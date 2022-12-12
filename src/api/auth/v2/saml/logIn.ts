import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Authenticates a user for a service through SAML2.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return SAML2 response XML
 */
export async function logIn(client: NobloxClient) {
  return await client.http<SamlAuthenticationResult>(`https://auth.roblox.com/v2/saml/login`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
