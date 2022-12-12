import { NobloxClient } from '../../../../client/noblox.js'

/**
 * ✅ Used by the GameServer to set a place's metadata.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param placeId The Id of the place we are setting the metadata for.
 * @param request An {Roblox.Games.Api.ReportPlaceMetadataRequest}.
 * @return OK TODO:
 */
export async function reportPlaceMetadata(
  client: NobloxClient,
  placeId: number,
  request: ReportPlaceMetadataRequest
) {
  return await client.http<{}>(`https://games.roblox.com/v1/games/places/${placeId}/metadata`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PUBLIC',
    },
    json: {
      request,
    },
  })
}
