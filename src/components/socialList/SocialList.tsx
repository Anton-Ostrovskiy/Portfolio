import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'

// type SocialListPropsType = {
//     link: string
// }

export const SocialList = () => {
  return (
    <StyledSocialList>
        <SocialItem>
            <SocialLink href="#git">
                <Icon iconId={"git"} fill={'#A7A7A7'}/>
            </SocialLink>
        </SocialItem>
        <SocialItem>
            <SocialLink href="#twitter">
                <Icon iconId={"twitter"} viewBox={"0 0 31 31"} fill={'#A7A7A7'}/>
            </SocialLink>
        </SocialItem>
        <SocialItem>
            <SocialLink href="#link">
                <Icon iconId={"linkedin"} fill={'#A7A7A7'}/>
            </SocialLink>
        </SocialItem>
    </StyledSocialList>
  )
}

const StyledSocialList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`
const SocialItem = styled.li`
    
`

const SocialLink = styled.a.attrs((props)=>({
    target: "_blank",
    href:props.href,
}))`
    svg {
        transition: 1s;
    }
    &:hover svg{
        fill: red;
        transform: scale(1.1)
    }
`