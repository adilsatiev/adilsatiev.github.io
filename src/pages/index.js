import React from 'react'
//import { Link } from 'gatsby'
import introPhoto from '../img/intro-photo.png'
import * as iS from '../styles/index.module.css'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
      <Layout>

        <div className={iS.main}>
          <div className={iS.box}>
              <h1 className={iS.header}>Hi, I am Adil, Web Developer</h1>
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
        
        <div className={iS.recent}>
          <h2 className={iS.h2}>
            Recent Posts
          </h2>
          <div className={iS.blogbox}>
            <div className={iS.blogpost}>

            </div>
            <div className={iS.blogpost}>

            </div>
          </div>
        </div>
      </Layout>
  )
}

export default IndexPage