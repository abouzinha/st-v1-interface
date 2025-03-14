import useActiveRoute from '@/hooks/useActiveRoute'

import Link from 'next/link'
import styled from 'styled-components'
import useLocaleTranslation from '../../../hooks/useLocaleTranslation'
import { useRouter } from 'next/router'
import { PiCellSignalFull, PiCurrencyEth, PiGift } from 'react-icons/pi'
function LayoutMenuMobile() {
  const { t } = useLocaleTranslation()
  const { isActive } = useActiveRoute()
  const { query } = useRouter()
  const { currency, network } = query

  return (
    <Container>
      <NextLink
        href={`/${network}/${currency}/invest`}
        className={`${isActive('invest') || isActive('deposit') || isActive('withdraw') ? 'active' : ''}`}
      >
        <InvestIcon />
        {t('v2.header.invest')}
      </NextLink>
      <NextLink
        href={`/${network}/${currency}/incentives`}
        className={`${isActive('incentives') ? 'active' : ''}`}
      >
        <IncentivesIcon />
        {t('v2.header.incentives')}
      </NextLink>
      <NextLink href={`/${network}/${currency}/gifts`} className={`${isActive('gifts') ? 'active' : ''}`}>
        <GiftsIcon />
        {t('v2.header.gifts')}
      </NextLink>
    </Container>
  )
}

const { Container, NextLink, InvestIcon, IncentivesIcon, GiftsIcon } = {
  Container: styled.nav`
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.color.white};
    padding: 12px ${({ theme }) => theme.size[16]};

    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: space-around;

    border-top: 1px solid ${({ theme }) => theme.color.blue[200]};
    box-shadow: ${({ theme }) => theme.shadow[100]};

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: none;
    }
  `,
  NextLink: styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colorV2.gray[1]};
    font-size: ${({ theme }) => theme.font.size[14]};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    &.active {
      color: ${({ theme }) => theme.color.secondary};
    }
  `,
  InvestIcon: styled(PiCurrencyEth)`
    font-size: 14px;
  `,
  IncentivesIcon: styled(PiCellSignalFull)`
    font-size: 16px;
  `,
  GiftsIcon: styled(PiGift)`
    font-size: 14px;
  `
}

export default LayoutMenuMobile
