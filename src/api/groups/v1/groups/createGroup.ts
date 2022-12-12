import fs from 'fs'
import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Creates a new group.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param requestName The name of the group.
 * @param requestDescription The group description.
 * @param requestPublicGroup Whether or not the group is open for anyone to join.
 * @param requestBuildersClubMembersOnly Whether or not the group is only open to join for builders club members.
 * @param requestFiles TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function createGroup(
  client: NobloxClient,
  requestName?: string,
  requestDescription?: string,
  requestPublicGroup?: boolean,
  requestBuildersClubMembersOnly?: boolean,
  requestFiles?: fs.ReadStream
) {
  return await client.http<GroupResponseV2>(`https://groups.roblox.com/v1/groups/create`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
      isRatelimited: true,
    },
    form: {
      'request.name': requestName,
      'request.description': requestDescription,
      'request.publicGroup': requestPublicGroup,
      'request.buildersClubMembersOnly': requestBuildersClubMembersOnly,
      'request.files': requestFiles,
    },
  })
}
