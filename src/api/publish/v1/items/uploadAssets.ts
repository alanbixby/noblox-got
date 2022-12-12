import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/** 
      * 🔐 Uploads new asset/s for the user.
      * 
 * @param client the inherited http client and noblox wrapper class
 * @param uploadAssetRequestFiles TODO: DESCRIPTION HERE
 * @return OK - It should include the "config.json" file with the dictionary format for filename, item name and item description for all uploaded item files in the request
            {"apple":{"type":"Image","name":"Apple","description":"Its a fruit"},
            "banana":{"type":"Hair Accessory","name":"Fruit Hat","description":"Its a fruit hat"}}.
      */
export async function uploadAssets(client: NobloxClient, uploadAssetRequestFiles?: fs.ReadStream) {
  return await client.http<UploadAssetResponse>(`https://publish.roblox.com/v1/assets/upload`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    form: {
      'uploadAssetRequest.files': uploadAssetRequestFiles,
    },
  })
}
