import React from 'react'
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialList } from '../../components/socialList/SocialList';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from '../../components/menu/MobileMenu';

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
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
  width: 100%;
  padding: 40px 0;
  background-color: #191919;
  z-index: 1;
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
`