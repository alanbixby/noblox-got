export interface CursorResponse<T> {
  previousPageCursor?: string
  nextPageCursor?: string
  data: T[]
}

export interface Transaction {
  transactionId: number
  id: number
  created: string
  isPending: boolean
  agent: Agent
  details: Details
  currency: Currency
}

export interface Agent {
  id: number
  type: AgentType
  name: string
}

export enum AgentType {
  User = 'User',
  Group = 'Group',
}

export interface Currency {
  amount: number
  type: CurrencyType
}

export enum CurrencyType {
  Robux = 'Robux',
}

export interface Details {
  id?: number
  name: string
  type: DetailsType
  place?: Place
  payments?: Payment[]
}
export interface Payment {
  created: string
  currency: Currency
}

export interface Place {
  placeId: number
  universeId: number
  name: string
}

export enum DetailsType {
  Asset = 'Asset',
  GamePass = 'GamePass',
  PrivateServer = 'PrivateServer',
}
