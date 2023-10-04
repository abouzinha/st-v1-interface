import { ContentfulImage } from './ContentfulPool'
import { Delegation } from './Delegation'

export type PoolSubgraph = {
  marketShare: bigint
  id: string
  address: `0x${string}`
  active: boolean
  poolBalance: bigint
  totalRewards: bigint
  activitiesCount: string
  listed: boolean
  poolShares: bigint
  rewardsCount: string
  delegations: Delegation[]
  receivedDelegationsCount: bigint
} & ENSPool

export type ENSPool = {
  address: `0x${string}`
  name?: string
  avatar?: string
}

export type Pool = {
  type: string
  logo: ContentfulImage
  name: string
} & PoolSubgraph
