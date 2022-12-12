import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔒 Get place details
 *
 * @param client the inherited http client and noblox wrapper class
 * @param placeIds List of placeId to uniquely Identify a place
 * @return TODO:
 */
export async function multiGetPlaceDetails(client: NobloxClient, placeIds: number[]) {
  return await client.http<PlaceDetails[]>(`https://games.roblox.com/v1/games/multiget-place-details`, {
    method: 'GET',
    context: {
      authenticationLevel: 'REQUIRED',
    },
    searchParams: {
      placeIds,
    },
  })
}
