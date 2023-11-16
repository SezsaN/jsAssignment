import React from 'react'
import LadyPicture from '../../../images/article-news-lady.png'
import ArticlePicture from '../../../images/article-news-grid.png'
import BookPicture from '../../../images/article-news-books.png'
import Button from '../../baseComponents/Button'
import ArticleAndNewsBox from '../../baseComponents/ArticleAndNewsBox'
import Dots from '../../baseComponents/Dots'


const articleAndNewsData = [
    { image: LadyPicture, alt: "Picture of a lady sitting in a classroom ", title: "How To Use Digitalization In The Classroom", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." },
    { image: ArticlePicture, alt: "spreadsheet for chat gpt ", title: "How To Implement Chat GPT In Your Projects", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." },
    { image: BookPicture, alt: "two books with a mobilephone on top of them", title: "The Guide To Support Modern CSS Design", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."}
]

const ArticleAndNews = () => {
  return (
    <>
    <section className="details-art-news">
    
    <div className="container">
        <div className="section-title">
            <p>Article & News</p>
            <h2>
                Get Every Single Articles & News
                <Button type="white" title="Browse Articles" url="/articles"  />
            </h2>
        </div>
        <div className="content">
          
                {
                    articleAndNewsData.map((item, index) => (
                        <ArticleAndNewsBox key={index} image={item.image} alt={item.alt} title={item.title} description={item.description} />
                    ))
                }
            
        </div>
        <div>

           <Dots />
        </div>
    </div>
</section>
    </>
  )
}

export default ArticleAndNews