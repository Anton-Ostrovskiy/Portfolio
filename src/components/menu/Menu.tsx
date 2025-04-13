import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

type MenuPropsType = {
    menuItems: Array<string>,
    marginBot?:string
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu marginBot={props.marginBot}>
            <ul>

                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <a href="#">{item}</a>
                    </li>
                })}

            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav<{marginBot?:string}>`
    margin-bottom: ${props => props.marginBot || "0"};
    ul {
        display: flex;
        gap: 68px;
        list-style: none;
        li{
            a {
                font-family: "DM Sans", sans-serif;
                font-weight: 500;
                font-size: 20px;
                line-height: 1.3;
                text-align: center;
                color: ${theme.colors.menu};
                text-decoration: none;
                /* padding: 15px 15px; */
                /* display: inline-block; */
                /* min-width: 104px; */
                transition: .3s;
            }
            a:hover{
                color: #fff;
                border-bottom: 2px solid #fff;
            }
        }
    }
`