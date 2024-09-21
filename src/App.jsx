import './App.css'

import { Navigation } from './components/Navigation'
import { Landing } from './components/Landing'
import { AboutMe } from './components/AboutMe'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <Landing />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
