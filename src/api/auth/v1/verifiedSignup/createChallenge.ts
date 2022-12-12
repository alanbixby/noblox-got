import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Create a new verified signup challenge
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function createChallenge(client: NobloxClient, request: VerifiedSignupChallengeCreationRequest) {
  return await client.http<VerifiedSignupChallengeCreationResponse>(
    `https://auth.roblox.com/v1/verified-signup/challenge`,
    {
      method: 'POST',
      context: {
        authenticationLevel: 'PROTECTED',
        isRatelimited: true,
      },
      json: {
        request,
      },
    }
  )
}
