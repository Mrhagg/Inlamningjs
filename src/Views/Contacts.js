import React from 'react'

import ConnectSection from '../components/ConnectSection'
import MessageSection from '../components/MessageSection'
import FormsSection from '../components/FormsSection'
import ImgMap from '../components/ImgMap'
import ContactInfo from '../components/ContactInfo'
import Footer from '../components/Footer'
import NavSection from '../components/NavSection'




const Contacts = () => {
  return (
      <>
        <NavSection />
        <ConnectSection />
        <MessageSection />
        <FormsSection />
        <ImgMap />
        <ContactInfo />
        <Footer />
      </>
  )
}

export default Contacts