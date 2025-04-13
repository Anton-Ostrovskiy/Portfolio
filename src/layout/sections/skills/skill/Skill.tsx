import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { theme } from '../../../../styles/Theme'

type SkillPropsType = {
    item:{
        iconId:string
        title: string
        precentage:string
        fill?:string
    }
    
}

export const Skill = (props:SkillPropsType) => {
    // const { item } = props;
    return (
        <StyledSkill>
            <Content>
                <IconWrapper>
                    <Icon width={"50px"} height={"50px"} viewBox={"0 0 120 120"} fill={props.item.fill} iconId={props.item.iconId} />
                </IconWrapper>
                <SkillBarWrapper>
                    <Title>
                        {props.item.title}
                    </Title>
                    <SkillBar>
                        <ProgressSkill style={{width:props.item.precentage}}>
                            {/* <span>{props.item.precentage}</span> */}
                        </ProgressSkill>
                    </SkillBar>
                </SkillBarWrapper>
            </Content>
        </StyledSkill>
    )
}


const StyledSkill = styled.div`

`

const IconWrapper = styled.div`
  
`

const SkillBarWrapper = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 1rem;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h3`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 0.92857;
    color: ${theme.colors.font};
`

const SkillBar = styled.div`
    width: 100%;
    height: 20px;
    overflow: hidden;
    border-radius:20px;
    background-color: #a19e9e;
    border:1px solid gray;
`

const ProgressSkill = styled.div`
    /* width: 0; */
    height: 100%;
    /* transition: width .5s; */
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
    border-radius:20px;
    animation: loading 2s forwards;

    @keyframes loading {
        100%{
            width:"precentage";
        }
    }
`