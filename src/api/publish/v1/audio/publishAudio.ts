import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Published an audio file and returns the new asset info.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The file upload request body. {Roblox.Publish.Api.UploadAudioRequest}
 * @return OK TODO:
 */
export async function publishAudio(client: NobloxClient, request: UploadAudioRequest) {
  return await client.http<PublishAudioResponse>(`https://publish.roblox.com/v1/audio`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      request,
    },
  })
}
