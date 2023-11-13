import React from 'react'
import Header from '../components/pageComponents/Header'
import NewsAndArticles from '../components/pageComponents/news/NewsAndArticles'
import NewsAndUpdates from '../components/pageComponents/home/NewsAndUpdates'
import Footer from '../components/pageComponents/Footer'



const News = () => {
  return (
    <>
    <Header />
    <NewsAndArticles />
    <NewsAndUpdates />
    <Footer />
    </>
  )
}

export default News