import React, { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom'



const Digitalization = ({day}) => {
    
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

    const year = "2023";
    
    const { id } = useParams()
    const [article, setArticle] = useState([])

    useEffect(() => {
        getArticle()
    }, [])

    const getArticle = async () => {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

        if (result.status === 200) {
            setArticle(await result.json())
        }
    }

  return (
    <section className="digitalization">
        <div className="container">
        <div className="content-left">
            <div className="section-title">
                <h2>How To Use Digitalization <br/> In The Classroom</h2>
            </div>
            <div className="article-date">
                <p key={months}>{months[10]}</p>
                <p>13,</p>
                <p>{year}</p>
                <p className="dot"></p>
                <p>{article.title}</p>
                <p className="dot"></p>
                <p>{article.author}</p>
            </div>
            <div className="article-content">
                <div className="article-image">
                    <img src={article.imageUrl} alt="article image"/>
                </div>
            </div>
            <div className="article-description-one">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,<br/> 
                    magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br/><br/>
                    Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br/>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra<br/> 
                    nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse<br/>
                    dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend.<br/>
                    Ut nonummy.<br/><br/>

                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,<br/>
                    magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc<br/>
                    viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et<br/>
                    malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br/><br/>
                    Aenean nec lorem. In porttitor.<br/>
                     Donec laoreet nonummy augue.
                    Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.<br/>
                     Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                </p>
            </div>
            <div className="article-description-big">
                <h4>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas<br/> 
                porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,<br/> 
                purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                </h4>
            </div>
            <div className="article-description-last">
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,<br/>
                magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc<br/>
                viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et<br/>
                netus et malesuada fames ac turpis egestas. 
                </p>
            </div>
            <div className="article-tags">
                <p>Digitalization</p>
                <p>School</p>
                <p>IT</p>
                <p>Design</p>
                <p>Work</p>
                <p>Tech</p>
            </div>
        </div>    
            <div className="content-right">
                <div className="search-bar">
                    <i className="fa-regular fa-magnifying-glass"></i>       
                    <input type="text" placeholder="Type to search..." />
                </div>
                <div className="empty-box"></div>
                <div className="recent-posts">
                    <div className="title">
                        <h3>Recent Posts</h3>
                        <div className="small-line"></div> 
                    </div>
                    <div className="recent-written-posts">
                        <h4>How To Blow Through Capital At An<br/> Incredible Rate</h4>
                        <p>Jan 14, 2020</p>
                        <div className="line"></div>
                    </div>
                    <div className="recent-written-posts">
                        <h4>Design Studios That Everyone Should<br/> Know About? </h4>
                        <p>Jan 14, 2020</p>
                        <div className="line"></div>
                    </div>
                    <div className="recent-written-posts">
                        <h4>How did we get 1M+ visitors in 30 days<br/> without anything!</h4>
                        <p>Jan 14, 2020</p>
                        <div className="line"></div>
                    </div>
                    <div className="recent-written-posts">
                        <h4>Figma On Figma: How We Built Our<br/> Website Design System</h4>
                        <p>Jan 14, 2020</p>
                    </div>
                    <div className="empty-box-two"></div>
                    <div className="categories">
                        <div className="title">
                            <h3>Categories</h3>
                            <div className="small-line"></div> 
                        </div>
                        <div className="categories-list">
                            <p className="bold">Technology - <span className="posts">20 Posts</span></p>
                            <p className="bold">Freelancing - <span className="posts">07 Posts</span></p>
                            <p className="bold">Writing - <span className="posts">16 Posts</span></p>
                            <p className="bold">Marketing - <span className="posts">11 Posts</span></p>
                            <p className="bold">Business - <span className="posts">35 Posts</span></p>
                            <p className="bold">Education - <span className="posts">14 Posts</span></p>
                        </div>
                    </div>
                </div>       
             </div>    
        </div> 
    </section>
  )
}
           
            

export default Digitalization




                    



                            


                
                