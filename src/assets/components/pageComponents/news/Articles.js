import React from 'react'
import { useArticles } from '../../../contexts/ArticleContexts'
import NewsButtons from '../../baseComponents/NewsButtons'

const Articles = () => {
    const { articles } = useArticles()
    return (
        <section className="news-articles">
            <div className="container">
                <h2>Our News & Articles</h2>
                <div className="articles">
                    {
                        articles.map(article => (
                            <div key={article.id}>
                                <img src={article.imageUrl} alt="bild" />
                                <h3>{article.title}</h3>
                                <p>{article.author}</p>
                                <p>{article.content}</p>
                                <p>{article.published}</p>
                            </div>
                        ))}
                </div>
                <NewsButtons />
            </div>
        </section>
    )
}

export default Articles