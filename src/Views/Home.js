import React from 'react'
import NavSection from '../components/NavSection'
import ShowcaseSection from '../components/ShowcaseSection'
import BoxSection from '../components/BoxSection'
import FinanceSection from '../components/FinanceSection'
import CompanySection from '../components/CompanySection'
import AgencySection from '../components/AgencySection'
import ProjectsSection from '../components/ProjectsSection'
import MembersSection from '../components/MembersSection'
import ArticleSection from '../components/ArticleSection'
import NewSection from '../components/NewSection'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
      <>
        <NavSection />
        <ShowcaseSection />
        <BoxSection />
        <FinanceSection />
        <CompanySection />
        <AgencySection />
        <ProjectsSection />
        <MembersSection />
        <ArticleSection />
        <NewSection />
        <InfoSection />
        <Footer />
      </>
  )
}

export default Home