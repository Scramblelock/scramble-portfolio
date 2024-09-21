import styled from '@emotion/styled'
import { ABOUT, COLORS, FONTS } from '../const'

const AboutMeContainer = styled.div`
  padding: 10% 0 20% 0;
`

const Header = styled.h1`
  font-family: ${FONTS.HELVETICA_NEUE};
  font-weight: bold;
  font-size: 36px;
  padding: 10%;
  text-align: center;
  color: ${COLORS.BLACK};
`

const AboutText = styled.p`
  font-family: ${FONTS.AVENIRNEXT};
  font-size: 20px;
  color: ${COLORS.BLACK};
  letter-spacing: -0.38px;
  text-align: justify;
  padding: 0 15%;
  line-height: 30px;
`

const TouchLink = styled.a`
  text-decoration: none;
  color: ${COLORS.BLACK};
  font-weight: bold;
`

export const AboutMe = () => {
  return (
    <AboutMeContainer id='about'>
      <Header>{ABOUT.header}</Header>

      <AboutText>{ABOUT.par1}</AboutText>

      <AboutText>
        {ABOUT.par2}
        <TouchLink
          href='https://www.scramblelock.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          {ABOUT.b1}
        </TouchLink>
        {ABOUT.par3}
      </AboutText>

      <AboutText>
        {ABOUT.par4}
        <TouchLink href='#contact'>{ABOUT.b2}</TouchLink>
        {ABOUT.par5}
      </AboutText>
    </AboutMeContainer>
  )
}
