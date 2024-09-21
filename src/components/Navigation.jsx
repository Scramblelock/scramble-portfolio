import styled from '@emotion/styled'
import marcLogo from '../assets/Logos/marcLogo.png'
import { Link, animateScroll as scroll } from 'react-scroll'
import { NAVIGATION, COLORS } from '../const'

const NavigationContainer = styled.div``

const NavBar = styled.ul`
  width: 100%;
  margin: 0 0 3em 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  z-index: 5;
  top: 0;
  background: white;
`

const Logo = styled.li`
  display: flex;
  padding: 1% 1%;
  font-size: 1em;
  flex: 1;
`

const MenuItems = styled.li`
  display: flex;
  padding: 1% 1%;
  font-size: 1em;
  margin-right: 3%;
`

const LinkContainer = styled(Link)`
  cursor: pointer;
  color: ${COLORS.BLACK};

  &.active {
    border-bottom: 2px solid #333; /* Persistent underline when active */
  }

  &:hover {
    color: ${COLORS.BLACK};
  }
`

const MarcLogo = styled.img`
  height: 3em;
  cursor: pointer;
`

const renderNavItems = () => {
  return NAVIGATION.map((navItem) => (
    <MenuItems key={navItem.title}>
      <LinkContainer
        activeClass='active'
        to={navItem.direction}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {navItem.title}
      </LinkContainer>
    </MenuItems>
  ))
}

const scrollToTop = () => {
  scroll.scrollToTop()
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavBar>
        <Logo>
          <MarcLogo alt='marcLogo' src={marcLogo} onClick={scrollToTop} />
        </Logo>
        {renderNavItems()}
      </NavBar>
    </NavigationContainer>
  )
}
