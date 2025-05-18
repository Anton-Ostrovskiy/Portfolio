import React from 'react'
import styled, { css } from 'styled-components'
import { theme } from '../../../../styles/Theme'

type MenuPropsType = {
    tabsItems: Array<{ title: string, status: "all" | "landing" | "react" | "spa" }>,
    marginBot?: string,
    changeFilterProject: (value: "all" | "landing" | "react" | "spa") => void
    filterProject: string
}

export const TabMenu = (props: MenuPropsType) => {
    return (
        <StyledMenu marginBot={props.marginBot}>
            <ul>

                {props.tabsItems.map((item, index) => {
                    return <li key={index}>
                        <Button active={props.filterProject === item.status} onClick={() => { props.changeFilterProject(item.status) }}>{item.title}</Button>
                    </li>
                })}

            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav<{ marginBot?: string }>`
    margin-bottom: ${props => props.marginBot || "0"};
    max-width: 610px;
    display: flex;
    flex-grow: 1;
    ul {
        display: flex;
        width: 100%;
        gap: 15px;
        list-style: none;
        justify-content: space-between;
        li{
            button {
                font-family: "DM Sans", sans-serif;
                font-weight: 500;
                font-size: 20px;
                line-height: 1.3;
                text-align: center;
                color: ${theme.colors.menu};
                text-decoration: none;
                transition: .3s;
                white-space: nowrap;
            }
            button:hover{
                color: #fff;
                border-bottom: 2px solid #fff;
                cursor: pointer;
            }
        }
    }
`

const Button = styled.button<{ active: boolean }>`
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
            &:hover{
                color: #fff;
                border-bottom: 2px solid #fff;
            }

            ${props => props.active && css<{ active: boolean }>`
                color: #fff;
                border-bottom: 2px solid #fff;
            `}
`