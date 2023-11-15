import React from 'react'

const NewsButtons = () => {
  return (
    <div className="news-button">
      <span className="news-btn" ><i class="fa-solid fa-angle-left"></i></span>
      <span className="news-btn">1</span>
      <span className="news-btn">2</span>
      <span className="news-btn">3</span>
      <span className="news-btn">...</span>
      <span className="news-btn">9</span>
      <span className="news-btn"><i class="fa-solid fa-angle-right"></i></span>
    </div>
  )
}

export default NewsButtons