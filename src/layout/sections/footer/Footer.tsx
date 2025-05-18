import styled from 'styled-components'
import { Logo } from '../../../components/logo/Logo'
import { SocialList } from '../../../components/socialList/SocialList'
import { Menu, StyledMenu } from '../../../components/menu/Menu'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { Link } from 'react-scroll'

const footerItems = [
  {
      title:"Home",
      href: "home"
  },
  {
      title:"About",
      href: "about"
  },
  {
      title:"Tech Stack",
      href: "techstack"
  },
  {
      title:"Projects",
      href: "project"
  },
  {
      title:"Contact",
      href: "contact"
  },
]

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterWrapper>
          <TopWrapper>
            <Logo />
            <CommunicationWrapper>
              <a href="tel:+911234509876">+91 12345 09876</a>
              {/* <StyledLink
              smooth={true}
              to={"contact"}
              >ostrovskiy.98@mail.ru
              </StyledLink> */}
              <a href="mailto:ostrovskiy.98@mail.ru">ostrovskiy.98@mail.ru</a>
              <SocialList />
            </CommunicationWrapper>
          </TopWrapper>
          <BottomWrapper>
            <Menu menuItems={footerItems} />
            <Copyright> <Text>Designed and built by</Text> Anton <Text>with</Text> Love <Text>&</Text> Coffee</Copyright>
          </BottomWrapper>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    padding-bottom: 60px;
`
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`

const Copyright = styled.p`
    background:linear-gradient(to right, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    color:transparent;
`

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 42px;
  border-bottom: 2px solid #42446E;
  gap: 15px;
  /* margin-bottom: 42px; */
  /* @media ${theme.media.tablet} {
      justify-content: center;
    } */
`

const CommunicationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    @media ${theme.media.tablet} {
      flex-wrap: wrap;
      gap: 20px;
      justify-content: flex-end;
    }
`

const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 25px;
    ${StyledMenu} {
        max-width: 550px;
    }
    @media ${theme.media.tablet} {
      justify-content: center;
    }
`

const StyledLink = styled(Link)`
  cursor: pointer;
`

const Text = styled.span`
    
    color:#ccc;
`