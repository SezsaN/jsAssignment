import React from 'react'
import Header from '../components/pageComponents/Header'
import Showcase from '../components/pageComponents/home/Showcase'
import Brands from '../components/pageComponents/home/Brands'
import Features from '../components/pageComponents/home/Features'
import AboutCompany from '../components/pageComponents/home/AboutCompany'
import OurServices from '../components/pageComponents/home/OurServices'
import WhyChooseUs from '../components/pageComponents/home/WhyChooseUs'
import ProjectAndCase from '../components/pageComponents/home/ProjectAndCase'
import MeetOurTeam from '../components/pageComponents/home/MeetOurTeam'
import OurClients from '../components/pageComponents/home/OurClients'
import ArticleAndNews from '../components/pageComponents/home/ArticleAndNews'
import NewsAndUpdates from '../components/pageComponents/home/NewsAndUpdates'
import Footer from '../components/pageComponents/Footer'







const Home = () => {
  return (
    <>
        <Header />
        <Showcase />
        <Brands />
        <Features />
        <AboutCompany />
        <OurServices />
        <WhyChooseUs />
        <ProjectAndCase />
        <MeetOurTeam />
        <OurClients />
        <ArticleAndNews />
        <NewsAndUpdates />
        <Footer />
    </>
  )
}

export default Home