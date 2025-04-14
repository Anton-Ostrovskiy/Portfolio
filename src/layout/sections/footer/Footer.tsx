import styled from 'styled-components'
import { Logo } from '../../../components/logo/Logo'
import { SocialList } from '../../../components/socialList/SocialList'
import { Menu } from '../../../components/menu/Menu'
import { Container } from '../../../components/Container'

const footerItems = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <TopWrapper>
          <Logo />
          <CommunicationWrapper>
            <a href="tel:+91 12345 09876">+91 12345 09876</a>
            <p>info@example.com</p>
            <SocialList />
          </CommunicationWrapper>
        </TopWrapper>
        <BottomWrapper>
          <Menu menuItems={footerItems} />
          <Copyright>Designed and built by <GradientText>Anton</GradientText> with <GradientText>Love</GradientText> & <GradientText>Coffee</GradientText></Copyright>
        </BottomWrapper>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    padding-bottom: 60px;
`

const Copyright = styled.p`
    
`

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 42px;
  border-bottom: 2px solid #42446E;
  margin-bottom: 42px;
`

const CommunicationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`

const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const GradientText = styled.span`
    background:linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    background-clip: text;
    color:transparent;
`