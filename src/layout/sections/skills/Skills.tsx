import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'
import { Container } from '../../../components/Container'
import { items } from './skillData'
import { Fade, Slide } from "react-awesome-reveal";
import { Icon } from '../../../components/icon/Icon'
import { font } from '../../../styles/Common'



export const Skills = () => {
  return (
    <StyledSkills id={"techstack"}>
      <Container>
        {/* <FlexWrapper> */}
        <SectionTitle>My Tech Stack</SectionTitle>
        <FlexWrapper direction={"column"} gap={"25px"} >

          {/* <Slide
          cascade
          damping={0.2}
          triggerOnce
          > */}
            {items.map((item) => {
              return <Skill key={item.iconId} item={item} />
            })}
          {/* </Slide> */}

        </FlexWrapper>
        <AdditionalSkilLText>Additional technologies and skills</AdditionalSkilLText>
        <AdditionalSkillWrapper>
          <Icon iconId={"styled-components"} width={"100"} height={"100"} viewBox={"0 0 120 120"}/>
          <Icon iconId={"typescript"} width={"100"} height={"100"} viewBox={"0 0 120 120"}/>
          <Icon iconId={"vscode"} width={"100"} height={"100"} viewBox={"0 0 120 120"}/>
        </AdditionalSkillWrapper>
        {/* </FlexWrapper> */}
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  min-height: 100vh;
    /* margin-bottom: 250px; */
`
const AdditionalSkilLText = styled.p`
 ${font({weight: 500,Fmax: 30, Fmin: 16 })}
  /* font-weight: 500;
  font-size: 30px; */
  text-align: center;
  margin: 60px 0 20px;
`

const AdditionalSkillWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
`