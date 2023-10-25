import React from 'react'
import './ProjectsSection.css'

import img_News from '../Assets/Images/News.svg'
import img_Note from '../Assets/Images/note.svg'
import img_Blockpen from '../Assets/Images/blockpen.svg'
import img_Computer from '../Assets/Images/Comput.svg'


const ProjectsSection = () => {
  return (
<section className="Projects">
  <div className="container">
    <div className="title-project">
      <p>Project & Case Studies</p>
      <h2>Let's Looks Our Global Projects</h2>
    </div>
    <div className="project-cases">
          <article>
          <img src={img_News} alt="" />
            <h3>Grow your business</h3>
            <a href="#">Read More<i className="fa-thin fa-arrow-up-right"></i></a>
          </article>
          <article>
          <img src={img_Note} alt="" />
            <h3>Why your clients need a responsiv website</h3>
            <a href="#">Read More<i className="fa-thin fa-arrow-up-right"></i></a>
          </article>
          <article>
          <img src={img_Blockpen} alt="" />
            <h3>Educate your employes to get better results</h3>
            <a href="#">Read More<i className="fa-thin fa-arrow-up-right"></i></a>
          </article>
          <article>
          <img src={img_Computer} alt="" />
            <h3>Business insights is a important piece of your business</h3>
            <a href="#">Read More <i className="fa-thin fa-arrow-up-right"></i></a>
          </article>
          <div>
          <a className="btn-black"href="All Recent Projects.html">All Recent Projects<i className="fa-solid fa-arrow-up-right"></i></a>
          </div>
          </div>
        </div>
    <div />
  <div />
</section>
  )
}

export default ProjectsSection