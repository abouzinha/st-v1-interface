import Wallet from '@/components/wallet/Wallet'
import useLocaleTranslation from '@/hooks/useLocaleTranslation'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import stIcon from '../../../../public/assets/st-icon.png'
import { useRouter } from 'next/router'
import useConnectedAccount from '@/hooks/useConnectedAccount'
import { PiListBold } from 'react-icons/pi'
import useLayoutSidebarMobileMenu from '@/hooks/useLayoutSidebarMobileMenu'
import LayoutSidebarMobileMenu from './LayoutSidebarMobileMenu'

export default function LayoutHeaderMobile() {
  const { t } = useLocaleTranslation()
  const { query } = useRouter()
  const { currency, network } = query
  const { account, accountIsConnected } = useConnectedAccount()
  const { setOpenSidebarMobileMenu } = useLayoutSidebarMobileMenu()

  return (
    <>
      <Container>
        <Content>
          <Logo href={`/${network}/${currency}/invest`}>
            <Image src={stIcon} alt={t('stakeTogether')} width={40} height={32} />
          </Logo>
          <WalletContainer>
            <Wallet account={account} accountIsConnected={accountIsConnected} />
            <MenuContainer onClick={() => setOpenSidebarMobileMenu(true)}>
              <MenuIcon />
            </MenuContainer>
          </WalletContainer>
        </Content>
      </Container>
      <LayoutSidebarMobileMenu account={account} />
    </>
  )
}

const { Container, Content, WalletContainer, Logo, MenuContainer, MenuIcon } = {
  Container: styled.header`
    display: grid;
    gap: ${({ theme }) => theme.size[24]};
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: none;
    }
  `,
  MenuContainer: styled.div`
    cursor: pointer;
    border-radius: ${({ theme }) => theme.size[8]};
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colorV2.gray[2]};
    box-shadow: ${({ theme }) => theme.shadow[200]};
    &:hover {
      background-color: ${({ theme }) => theme.colorV2.foreground};
    }
  `,
  MenuIcon: styled(PiListBold)`
    font-size: 18px;
  `,
  Content: styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: ${({ theme }) => theme.size[24]};
  `,
  WalletContainer: styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.size[8]};
    justify-content: flex-end;
  `,
  Logo: styled(Link)`
    width: 40px;
    height: 32px;
  `
}
