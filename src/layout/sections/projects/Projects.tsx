import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Menu } from '../../../components/menu/Menu'
import { FlexWrapper } from '../../../components/FlexWrapper'
// import project from '../../../assets/images/project-1.png'
import { Project } from './project/Project'
import { Container } from '../../../components/Container'
import { items } from './projectData'

const worksItems = ["All", "Landing page", "React", "SPA"]


export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle>My Works</SectionTitle>
          <Menu marginBot={"40px"} menuItems={worksItems} />
          <GridWrapper>
            {items.map((item)=>{
              return <Project item={item} />
            })}
            
          </GridWrapper>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  )
}


const StyledProjects = styled.section`
    margin-bottom: 170px;
`
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 65px;
`