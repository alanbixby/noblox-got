import { nobloxGot } from './client/http.js'

console.log(
  await nobloxGot('https://www.roblox.com/asset/delete-from-inventory', {
    method: 'POST',
    form: {
      assetId: 6973168089,
    },
  })
)
