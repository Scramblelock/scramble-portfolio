import styled from '@emotion/styled'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import { CONTENT, COLORS, FONTS } from '../const'

const WelcomeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 20% 0;
`

const HelloText = styled.div`
  font-family: ${FONTS.HELVETICA};
  font-size: 52px;
  font-weight: bold;
  padding-left: 5%;
  float: left;
  color: ${COLORS.BLACK};
`

const SliderItem = styled.div`
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: contain;
  width: 100%;
  height: 100%;
`

export const Landing = () => {
  return (
    <WelcomeContainer>
      <HelloText>Hello. My name is</HelloText>
      <Slider
        className='slider'
        autoplay={3000}
        previousButton={null}
        nextButton={null}
      >
        {CONTENT.map((item, index) => (
          <SliderItem key={index} background={item.image} />
        ))}
      </Slider>
    </WelcomeContainer>
  )
}
