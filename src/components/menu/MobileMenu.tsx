import { useState } from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/Theme'
import { Link } from 'react-scroll'

type MenuItemType = {
    title: string
    href: string
}

type MenuPropsType = {
    menuItems: MenuItemType[],
    marginBot?: string
}

export const MobileMenu = (props: MenuPropsType) => {

    const [open, isOpen] = useState(false);

    const toggleMenu = () => {
        isOpen(!open)
    }

    return (
        <StyledMobileMenu marginBot={props.marginBot}>
            <BurgerButton isOpen={open} onClick={toggleMenu}>
                <span></span>
            </BurgerButton>
            <MobileMenuWrapper isOpen={open} >
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <li key={index}>
                            <MobileNavLink
                            activeClass="active"
                            smooth={true}
                            to={item.href}
                            spy={true}
                           onClick={toggleMenu}
                            >{item.title}</MobileNavLink>
                        </li>
                    })}

                </ul>
            </MobileMenuWrapper>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav<{ marginBot?: string }>`
    display: none;
    margin-bottom: ${props => props.marginBot || "0"};
    
    @media ${theme.media.tablet} {
        display: block;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top:-100px;
    right: -100px;
    z-index: 99999999;
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255,255,255,0);
        `}

        &::before{
            content: "";
            display:block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}

        }
        &::after{
            content: "";
            display:block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}

        }
    }
`

const MobileMenuWrapper = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(31,31,32,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: .8s ease-in-out;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform:translateY(0);
    `}

    ul {
        display: flex;
        gap: 68px;
        list-style: none;
        flex-direction: column;
        align-items: center;
    }
`

const MobileNavLink = styled(Link)`
        font-family: "DM Sans", sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.3;
        text-align: center;
        color: ${theme.colors.menu};
        text-decoration: none;
        transition: .3s;
        white-space: nowrap;
        cursor: pointer;
        &:hover, &.active{
            color: #fff;
            border-bottom: 2px solid #fff;
            }
`