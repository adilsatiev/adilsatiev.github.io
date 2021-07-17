import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'
import introPhoto from '../img/intro-photo.png'
import * as iS from '../styles/index.module.css'

const IndexPage = () => {
  return (
    <div>
      <Header/>

      <div className={iS.container}>
          <h1 className={iS.header}>Hi, I am Adil, Creative Technologist</h1>
          <p className={iS.text}></p>
          <button className={iS.button}> Download Resume</button>
      </div>
      <img src={introPhoto} alt='introPhoto'></img>

      <Link to='/contact'>Link</Link>
      <Footer/>
    </div>
  )
}

export default IndexPage