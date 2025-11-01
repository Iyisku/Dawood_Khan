
import LandingPage from './Pages/LandingPage'

import Aboutpage from './Pages/Aboutpage'
import ProjectsPage from './Pages/ProjectsPage'

import Header from './Header'
import Experience from './Pages/Experience'
import Footer from './Footer'
import SkillsPage from './Pages/SkillsPage'
import ContactPage from './Pages/ContactPage'

export default function Layout() {
  return (
    <>
      <Header />
      <LandingPage />
      <SkillsPage />
      <Experience />
      <Aboutpage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  )
}