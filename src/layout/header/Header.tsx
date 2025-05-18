import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialList, StyledSocialList } from '../../components/socialList/SocialList';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from '../../components/menu/MobileMenu';
import { theme } from '../../styles/Theme';

const items = [
  {
      title:"Home",
      href: "home"
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



export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"} gap={"50px"}>
          <Logo aria-label='logo'/>
          <StyledMenu>
            <Menu menuItems={items} />
            <MobileMenu menuItems={items}/>
            <SocialList />
          </StyledMenu>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};


const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px 0;
  background-color: #191919;
  z-index: 1;

  @media ${theme.media.tablet}{
    ${StyledSocialList} {
      display: none;
    }
  }
`
// const StyledContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   max-width: 1200px;
//   margin: 0 auto;
// `
const StyledMenu = styled.div`
  display: flex;
  gap: 50px;
  flex-grow: 1;
  justify-content: flex-end;
`