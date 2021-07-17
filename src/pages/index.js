import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Nav from '../components/nav'
import introPhoto from '../img/intro-photo.png'
import * as iS from '../styles/index.module.css'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <div className={iS.main}>
      <Layout>

        <div className={iS.wrapper}>
          <div className={iS.container}>
              <h1 className={iS.header}>Hi, I am Adil, Creative Technologist</h1>
              <p className={iS.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className={iS.button}> Download Resume</button>
          </div>

          <div>
              <img className={iS.photo} src={introPhoto} alt='introPhoto'></img>
          </div>
        </div>
        
      </Layout>
    </div>
  )
}

export default IndexPage