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
            <SocialLink href="https://github.com/" aria-label="git-link">
                <Icon iconId={"git"} fill={'#A7A7A7'}/>
            </SocialLink>
        </SocialItem>
        <SocialItem>
            <SocialLink href="https://x.com/" aria-label="twitter-link">
                <Icon iconId={"twitter"} viewBox={"0 0 31 31"} fill={'#A7A7A7'}/>
            </SocialLink>
        </SocialItem>
        <SocialItem>
            <SocialLink href="https://linkedin.com/" aria-label="linkedin-link">
                <Icon iconId={"linkedin"} fill={'#A7A7A7'}/>
            </SocialLink>
        </SocialItem>
    </StyledSocialList>
  )
}

export const StyledSocialList = styled.ul`
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
        fill: #3894d1;
        transform: scale(1.1)
    }
`