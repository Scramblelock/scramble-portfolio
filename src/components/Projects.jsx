import styled from '@emotion/styled'
import { PROJECTS, COLORS, FONTS } from '../const'

const ProjectsContainer = styled.section`
  padding: 10% 0;
`

const ProjectsHeader = styled.h2`
  font-weight: bold;
  font-size: 36px;
  padding: 10%;
  text-align: center;
  color: ${COLORS.BLACK};
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

  @media (min-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const ContentOverlay = styled.div`
  background: ${COLORS.GREY};
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
`

const ContentImage = styled.img`
  width: 100%;
  display: block;
`

const ContentDetails = styled.div`
  position: absolute;
  text-align: center;
  padding: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  color: ${COLORS.BLACK};
  font-family: ${FONTS.AVENIRNEXT};
  font-weight: 600;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease-in-out;
`

const ProjectName = styled.h3``

const ProjectDescription = styled.p``

const ProjectLink = styled.a`
  display: block;
`

const ProjectBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: auto;
  overflow: hidden;

  &:hover ${ContentOverlay}, &:hover ${ContentDetails} {
    opacity: 1;
  }
`

export const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsHeader>Projects</ProjectsHeader>
      <ProjectsGrid>
        {PROJECTS.map((project, index) => (
          <ProjectBox key={`${project.name}_${index}`}>
            <ProjectLink
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <ContentOverlay />
              <ContentImage src={project.src} alt={project.name} />
              <ContentDetails>
                <ProjectName>{project.name}</ProjectName>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ContentDetails>
            </ProjectLink>
          </ProjectBox>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  )
}
