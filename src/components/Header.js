import React from 'react'
import './Header.css'

import NavSection from './NavSection'
import ShowcaseSection from './ShowcaseSection'
import BoxSection from './BoxSection'
import FinanceSection from './FinanceSection'
import CompanySection from './CompanySection'
import ConsultingSection from './ConsultingSection'
import AgencySection from './AgencySection'
import ProjectsSection from './ProjectsSection'
import MembersSection from './MembersSection'


const Header = () => {
  return (
  
  <header>
    <NavSection />
    <ShowcaseSection />
    <BoxSection />
    <FinanceSection />
    <CompanySection />
    <ConsultingSection />
    <AgencySection />
    <ProjectsSection />
    <MembersSection />
  </header>
  
  )
}

export default Header