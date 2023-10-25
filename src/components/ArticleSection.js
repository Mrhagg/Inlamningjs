import React from 'react'
import './ArticleSection.css'

import img_Smiley from '../Assets/Images/smileyg.svg'
import img_Tabs from '../Assets/Images/tabs.svg'
import img_Book from '../Assets/Images/books.svg'
import img_Dot from '../Assets/Images/dottedline.svg'

const ArticleSection = () => {
  return (
    <section className="Container-news">
  <div className="title-news">
    <p>Article & News</p>
    <h3>Get Every Single Articles & News</h3>
    <a className="btn-black"href="All Recent Projects.html">Browse Articles<i className="fa-solid fa-arrow-up-right"></i></a>
  </div>
  <div className="parent-yellowbox">
    <div className="yellow-box1">
      <h4>25</h4>
      <h5>Mar</h5>
    </div>
    <div>
      <div>
        <img src={img_Smiley} />
        <p><span className="business">Business</span></p>
       <h4>
          <span>How To Use Digitalization</span>
          <span>In The Classroom</span>
        </h4>
        <p>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          <span>Architecto sed hic libero.</span>
        </p>
      </div>
    </div>
    <div className="yellow-box2">
      <h4>17</h4>
      <h5>Mar</h5>
    </div>
      <div>
        <img src={img_Tabs} />
        <p><span className="business">Business</span></p>
        <h4>
          <span>How To Implement Chat GPT</span>
          <span>In Your Projects</span>
        </h4>
        <p>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          <span>Architecto sed hic libero.</span>
        </p>
      </div>
    <div className="yellow-box3">
      <h4>13</h4>
      <h5>Mar</h5>
    </div>
      <div>
        <img src={img_Book} />
        <p><span className="business">Business</span></p>
        <h4>
          <span>The Guide To Support </span>
          <span>Modern CSS Design</span>
        </h4>
        <p>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          <span>Architecto sed hic libero.</span>
        </p>
      </div>
  </div>
  <img className="dot-lines" src={img_Dot} />
</section>
  )
}

export default ArticleSection