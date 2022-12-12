import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets the SAML2 metadata XML.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function metadata(client: NobloxClient) {
  return await client.http<SamlMetadataResult>(`https://auth.roblox.com/v1/saml/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
  })
}
