import React from 'react'
import { useArticles } from '../../../contexts/ArticleContexts'
import NewsButtons from '../../baseComponents/NewsButtons'

import ArticleBox from '../../baseComponents/ArticleBox'

const Articles = () => {
    const { articles } = useArticles()
    
    const months = [
        "",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"      
    ]
    
    return (
        <section className="news-articles">
            <div className="container">
                <h2>Our News & Articles</h2>
                <div className="articles">
                    {
                        articles.map(article => (
                            <ArticleBox id={article.id} imageUrl={article.imageUrl} title={article.title} author={article.author} content={article.content} month={months[article.published.slice(5, 7)]} day={article.published.slice(8, 10)} />
                        ))}
                </div>
                <NewsButtons />
            </div>
        </section>
    )
}

export default Articles