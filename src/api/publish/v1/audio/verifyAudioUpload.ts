import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Verifies an audio file and returns a product that you can purchase to publish the audio file.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The verify audio request body. {Roblox.Publish.Api.VerifyAudioRequest}
 * @return OK TODO:
 */
export async function verifyAudioUpload(client: NobloxClient, request: VerifyAudioRequest) {
  return await client.http<VerifyAudioResponse>(`https://publish.roblox.com/v1/audio/verify`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
