import React from 'react'
import ShowCase from './components/ShowCase'
import BoxSection from './components/BoxSection'
import Finance from './components/Finance'
import Company from './components/Company'
import Agency from './components/Agency'
import Project from './components/Project'
import Members from './components/Members'
import Article from './components/Article'
import News from './components/News'
import Consulting from './components/Consulting'

const Home = () => {
  return (
      <>
        <ShowCase />
        <BoxSection />
        <Finance />
        <Company />
        <Consulting />
        <Agency />
        <Project />
        <Members />
        <Article />
        <News />
      </>
  )
}

export default Home