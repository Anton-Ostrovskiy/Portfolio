import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { Link } from 'react-scroll'

type MenuItemType = {
    title: string
    href: string
}

type MenuPropsType = {
    menuItems: MenuItemType[],
    marginBot?:string
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu marginBot={props.marginBot}>
            <ul>

                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <NavLink
                        activeClass="active"
                        smooth={true}
                        to={item.href}
                        spy={true}
                        // offset={-200}
                        >{item.title}</NavLink>
                    </li>
                })}

            </ul>
        </StyledMenu>
    )
}

export const StyledMenu = styled.nav<{marginBot?:string}>`
    margin-bottom: ${props => props.marginBot || "0"};
    max-width: 550px;
    display: flex;
    flex-grow: 1;
    ul {
        display: flex;
        width: 100%;
        gap: 15px;
        list-style: none;
        justify-content: space-between;
    }
    @media ${theme.media.tablet} {
        display: none;
    }
`

const NavLink = styled(Link)`
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