import React from 'react'
import Header from '../components/pageComponents/Header'
import NewsAndArticles from '../components/pageComponents/news/NewsAndArticles'
import DetailsArtNews from '../components/pageComponents/newsDetails/DetailsArtNews'
import Footer from '../components/pageComponents/Footer'
import Digitalization from '../components/pageComponents/newsDetails/Digitalization'


const NewsDetails = () => {
  return (
    <>
    <Header />
    <NewsAndArticles />
    <Digitalization />
    <DetailsArtNews />
    <Footer />
    </>
  )
}

export default NewsDetails
