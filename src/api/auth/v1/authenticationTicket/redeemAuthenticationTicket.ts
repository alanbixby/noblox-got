import { NobloxClient } from '../../../../client/noblox.js'

/**
 * 🔓 Redeems an authentication ticket.
 *
 * @param client the inherited http client and noblox wrapper class
 * @param request The request model containing the authentication ticket.
 * @param rbxAuthenticationNegotiation The custom header required to redeem a ticket
 * @return The authentication ticket for the user successfully redeemed.
 */
export async function redeemAuthenticationTicket(
  client: NobloxClient,
  request: RedeemAuthenticationTicketRequest,
  rbxAuthenticationNegotiation: string
) {
  return await client.http<{}>(`https://auth.roblox.com/v1/authentication-ticket/redeem`, {
    method: 'POST',
    context: {
      authenticationLevel: 'OPTIONAL',
    },
    json: {
      request,
    },
    headers: {
      RBXAuthenticationNegotiation: `${rbxAuthenticationNegotiation}`,
    },
  })
}
