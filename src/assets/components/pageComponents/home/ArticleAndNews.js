import React from 'react'
import LadyPicture from '../../../images/article-news-lady.png'
import ArticlePicture from '../../../images/article-news-grid.png'
import BookPicture from '../../../images/article-news-books.png'

const ArticleAndNews = () => {
  return (
    <>
    <section className="article-and-news">
    
    <div className="container">
        <div className="section-title">
            <p>Article & News</p>
            <h2>
                Get Every Single Articles & News
                <a class ="btn-transparent" href="#">Browse Articles <i className="fa-regular fa-arrow-up-right"></i></a>
            </h2>
        </div>
        <div className="content">
            <div className="first-section">
                <img className="pic" src={LadyPicture} alt="Picture of a lady sitting in a classroom " />
                <p className="business">Business</p>
                <h3>How To Use Digitalization In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
            <div>
                <img className="pic" src={ArticlePicture} alt="Picture of a lady sitting in a classroom " />
                <p className="business">Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
            <div>
                <img className="pic" src={BookPicture} alt="Picture of a lady sitting in a classroom " />
                <p className="business">Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>
        </div>
        <div>
            <a className="dots" href="#">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </a>
        </div>
    </div>
</section>
    </>
  )
}

export default ArticleAndNews