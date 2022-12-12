import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔐 Gets group policy info used for compliance.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupPolicyRequest TODO: DESCRIPTION HERE
 * @return OK TODO:
 */
export async function getGroupPolicies(client: NobloxClient, groupPolicyRequest: GroupPolicyRequest) {
  return await client.http<GroupPoliciesResponse>(`https://groups.roblox.com/v1/groups/policies`, {
    method: 'POST',
    context: {
      authenticationLevel: 'PROTECTED',
    },
    json: {
      groupPolicyRequest,
    },
  })
}
