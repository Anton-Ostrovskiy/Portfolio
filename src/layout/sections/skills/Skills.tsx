import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'
import { Container } from '../../../components/Container'
import { items } from './skillData'



export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        {/* <FlexWrapper> */}
          <SectionTitle>My Skills</SectionTitle>
          <FlexWrapper direction={"column"} gap={"25px"}>
            {items.map((item) => {
              return <Skill key={item.iconId} item={item} />
            })}
            {/* <Skill /> */}
            {/* <Skill />
            <Skill /> */}
          </FlexWrapper>
        {/* </FlexWrapper> */}
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.div`
    margin-bottom: 200px;
`