import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
// import project from '../../../assets/images/project-1.png'
import { Project } from './project/Project'
import { Container } from '../../../components/Container'
import { projects, tabsItems } from './projectData'
import { theme } from '../../../styles/Theme'
import { useState } from 'react'
import { TabMenu } from './tabMenu/TabMenu'
import { AnimatePresence, motion } from "motion/react"



export const Projects = () => {

  const [filterProject, setfilterProject] = useState("all");

  let filteredProject = projects;

  if (filterProject === "landing") {
    filteredProject = projects.filter(work => work.type === "landing")
  }

  if (filterProject === "react") {
    filteredProject = projects.filter(work => work.type === "react")
  }

  if (filterProject === "spa") {
    filteredProject = projects.filter(work => work.type === "spa")
  }

  function changeFilterProject(value: "all" | "landing" | "react" | "spa") {
    setfilterProject(value);
  }

  const gridColumns = filteredProject.length === 1 
    ? "1fr" 
    : filteredProject.length === 2 
      ? "1fr 1fr" 
      : "repeat(3, 1fr)";

  return (
    <StyledProjects id={"project"}>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle>My Works</SectionTitle>
          <TabMenu marginBot={"40px"} tabsItems={tabsItems} changeFilterProject={changeFilterProject} filterProject={filterProject} />
          <GridWrapper gridColumns={gridColumns} hasSingleItem={filteredProject.length === 1}>
            <AnimatePresence>
              {filteredProject.map((item) => {
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    key={item.id}
                  >
                    <Project item={item} key={item.id}/>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </GridWrapper>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  )
}


const StyledProjects = styled.section`
min-height: 100vh;
    /* margin-bottom: 170px; */
`
const GridWrapper = styled.div<{gridColumns:string, hasSingleItem: boolean}>`
  display: grid;
  grid-template-columns: ${({gridColumns}) => gridColumns};
  gap: 65px 50px;
  @media (max-width:1075px) {
          grid-template-columns: ${({ hasSingleItem }) => (hasSingleItem ? '1fr' : 'repeat(2, 1fr)')};
  }
  @media ${theme.media.tablet} {
          grid-template-columns: 1fr;
  }
`