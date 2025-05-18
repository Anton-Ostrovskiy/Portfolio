import React from 'react'
import { Icon } from '../icon/Icon'
import {animateScroll as scroll} from 'react-scroll'

export const Logo = () => {
    return (
        <a href="#!" onClick={ () => {scroll.scrollToTop()}} >
            <Icon  width={"97"} height={"59"} viewBox={"0 0 97 59"} iconId={"logo"} fill={"red"}/>
        </a>

    )
}
