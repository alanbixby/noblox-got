import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Retrieves parameters for the account security prompt deployed on the front end.
 *
 * @param client the inherited http client and noblox wrapper class
 * @return OK TODO:
 */
export async function retrieveAccountSecurityPromptParameters(client: NobloxClient) {
  return await client.http<AccountSecurityPromptResponse>(
    `https://auth.roblox.com/v1/security-prompt-parameters`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'REQUIRED',
      },
    }
  )
}
