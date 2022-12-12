import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Gets the Group's audit log
 *
 * @param client the inherited http client and noblox wrapper class
 * @param groupId The id of the group the user is in.
 * @param actionType TODO: DESCRIPTION HERE
 * @param userId Filter for specific user id
 * @param sortOrder The order the results are sorted in.
 * @param limit The amount of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @return OK TODO:
 */
export async function getGroupAuditLog(
  client: NobloxClient,
  groupId: number,
  actionType?:
    | 'DeletePost'
    | 'RemoveMember'
    | 'AcceptJoinRequest'
    | 'DeclineJoinRequest'
    | 'PostStatus'
    | 'ChangeRank'
    | 'BuyAd'
    | 'SendAllyRequest'
    | 'CreateEnemy'
    | 'AcceptAllyRequest'
    | 'DeclineAllyRequest'
    | 'DeleteAlly'
    | 'DeleteEnemy'
    | 'AddGroupPlace'
    | 'RemoveGroupPlace'
    | 'CreateItems'
    | 'ConfigureItems'
    | 'SpendGroupFunds'
    | 'ChangeOwner'
    | 'Delete'
    | 'AdjustCurrencyAmounts'
    | 'Abandon'
    | 'Claim'
    | 'Rename'
    | 'ChangeDescription'
    | 'InviteToClan'
    | 'KickFromClan'
    | 'CancelClanInvite'
    | 'BuyClan'
    | 'CreateGroupAsset'
    | 'UpdateGroupAsset'
    | 'ConfigureGroupAsset'
    | 'RevertGroupAsset'
    | 'CreateGroupDeveloperProduct'
    | 'ConfigureGroupGame'
    | 'Lock'
    | 'Unlock'
    | 'CreateGamePass'
    | 'CreateBadge'
    | 'ConfigureBadge'
    | 'SavePlace'
    | 'PublishPlace'
    | 'UpdateRolesetRank'
    | 'UpdateRolesetData',
  userId?: number,
  sortOrder: 'Asc' | 'Desc' = 'Asc',
  limit: 10 | 25 | 50 | 100 = 100,
  cursor?: string
) {
  return await client.http<GroupAuditLogResponseItem[]>(
    `https://groups.roblox.com/v1/groups/${groupId}/audit-log`,
    {
      method: 'GET',
      context: {
        authenticationLevel: 'OPTIONAL',
      },
      searchParams: {
        actionType,
        userId,
        sortOrder,
        limit,
        cursor,
      },
    }
  )
}
