import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LayoutHead from '../../../components/shared/layout/LayoutHead'
import LayoutTemplate from '../../../components/shared/layout/LayoutTemplate'
import { MetaPool } from '../../../components/shared/meta/MetaPool'
import StakeControl from '../../../components/stake/StakeControl'
import usePool from '../../../hooks/subgraphs/usePool'
import useTranslation from '../../../hooks/useTranslation'

type DepositPoolProps = {
  poolAddress: string
  name?: string
  avatar?: string
}

export default function Deposit({ poolAddress, name, avatar }: DepositPoolProps) {
  const { t } = useTranslation()

  const { pool } = usePool(poolAddress)

  return (
    <LayoutTemplate>
      <MetaPool name={name} avatar={avatar} />
      <LayoutHead text={t('titles.stake')} />
      <StakeControl pool={pool} type='deposit' />
    </LayoutTemplate>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const params = context?.params as { address: `0x${string}` } | undefined

  // if (params?.address) {
  //   const ens = await getEns(params?.address, true)
  //   const { url } = globalConfig

  //   if (ens) {
  //     return {
  //       props: {
  //         ...(await serverSideTranslations(context.locale || 'en', ['common'], null, ['en'])),
  //         poolAddress: params?.address || '',
  //         name: ens.name ? ens.name : '',
  //         avatar: ens.avatar ? `${url}/_next/image?url${ens.avatar}&q=75` : ''
  //       }
  //     }
  //   }
  // }

  return {
    props: {
      ...(await serverSideTranslations(context.locale || 'en', ['common'], null, ['en'])),
      poolAddress: params?.address || ''
    }
  }
}
