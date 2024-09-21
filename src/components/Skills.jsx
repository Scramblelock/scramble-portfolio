import styled from '@emotion/styled'
import { SKILLS, COLORS, FONTS } from '../const'

const SkillsContainer = styled.section`
  padding: 10% 0 20% 0;
`

const SkillsHeader = styled.h2`
  font-family: ${FONTS.HELVETICA_NEUE};
  font-weight: bold;
  font-size: 36px;
  padding: 10%;
  text-align: center;
  color: ${COLORS.BLACK};
`

const SkillsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2em;
  font-family: ${FONTS.AVENIRNEXT};
  font-size: 20px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const SkillContainer = styled.div`
  text-align: center;
`

const SkillTitle = styled.h3`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 0.5em;
  color: ${COLORS.BLACK};
`

const SkillList = styled.ul`
  padding-left: 0;
  list-style: none;
`

const SkillItem = styled.li`
  padding: 15px 0;
  color: ${COLORS.BLACK};
`

export const Skills = () => {
  return (
    <SkillsContainer id='skills'>
      <SkillsHeader>Skills</SkillsHeader>
      <SkillsListContainer>
        {SKILLS.map((skill, i) => (
          <SkillContainer key={`${skill.title}_${i}`}>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillList>
              {skill.items.map((item, idx) => (
                <SkillItem key={`${item}_${idx}`}>{item}</SkillItem>
              ))}
            </SkillList>
          </SkillContainer>
        ))}
      </SkillsListContainer>
    </SkillsContainer>
  )
}
