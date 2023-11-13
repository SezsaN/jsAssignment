import React from 'react'
import Header from '../components/pageComponents/Header'
import LetsConnect from '../components/pageComponents/contact/LetsConnect'
import ContactInformation from '../components/pageComponents/contact/ContactInformation'
import MessageUs from '../components/pageComponents/contact/MessageUs'
import Map from '../components/pageComponents/contact/Map'
import Footer from '../components/pageComponents/Footer'

const Contact = () => {
  return (
    <>
        <Header />
        <LetsConnect />
        <ContactInformation />
        <MessageUs />
        <Map />
        <Footer />
    </>
  )
}

export default Contact