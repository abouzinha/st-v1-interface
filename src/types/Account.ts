import { Delegation } from './Delegation'

export type Account = {
  id: string
  address: `0x${string}`
  balance: bigint
  shares: string
  totalDeposited: string
  totalRewards: bigint
  profitPercentage: bigint
  delegations: Delegation[]
  sentDelegationsCount: bigint
}

export type AccountDelegations = {
  sentDelegationsCount: bigint
  shares: bigint
  delegations: {
    delegated: {
      address: `0x${string}`
    }
    delegationShares: bigint
    delegationBalance: bigint
  }[]
}
