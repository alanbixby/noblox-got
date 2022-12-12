import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Gets two step verification system metadata.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param userId The user ID.
 * @param challengeId The active two step verification challenge ID if there is one.
 * @param actionType The {Roblox.TwoStepVerification.Client.TwoStepVerificationActionType} associated with the challenge.
 * @return OK TODO:
 */
export async function getMetadata(
  client: NobloxClient,
  userId?: number,
  challengeId?: string,
  actionType?: 'Unknown' | 'Login'
) {
  return await client.http<MetadataResponse>(`https://twostepverification.roblox.com/v1/metadata`, {
    method: 'GET',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    searchParams: {
      userId,
      challengeId,
      actionType,
    },
  })
}
