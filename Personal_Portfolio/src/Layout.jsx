import React from 'react'
import LandingPage from './Pages/LandingPage'
import SkillsPage from './Pages/SkillsPage'
import Aboutpage from './Pages/Aboutpage'
import ProjectsPage from './Pages/ProjectsPage'
import ContactPage from './Pages/ContactPage'
import Header from './Components/header'
import Experience from './Pages/experience';

function Layout() {
  return (
    <>
  <Header></Header>
   <LandingPage/>
   <SkillsPage/>
   <Experience/>
   <Aboutpage/>
   <ProjectsPage/>
   <ContactPage/>
   </>
    
  )
}

export default Layout