import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Submits a request to cash out.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestModel TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function submit(client: NobloxClient, requestModel: SubmitRequestModel) {
  return await client.http<SubmitResponseModel>(`https://economy.roblox.com/v1/developer-exchange/submit`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      requestModel,
    },
  })
}
