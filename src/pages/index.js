import React from 'react'
import Typical from 'react-typical'
import introPhoto from '../img/intro-photo.png'
import * as iS from '../styles/index.module.css'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <div className={iS.main}>
        <div className={iS.box}>
          <h1 className={iS.header}>
            Hey! My name is Adil and
            I'm a {''}
            <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                'developer 😎',
                3000,
                'student 😵',
                3000,
                'designer 🤠',
                3000,
                '... 🥴',
                3000
              ]}>
            </Typical>
          </h1>

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
        <div className={iS.wrapper}>
          <h2 className={iS.h2}>
            Recent Posts
          </h2>
          <div className={iS.blogbox}>

            <div className={iS.blogpost}>
              <h3 className={iS.blogtitle}>Making a desing system from scratch</h3>
              <div className={iS.key}>
                <span className={iS.data}>12 Jul 2021</span>
                <span className={iS.topic}>Design, Pattern</span>
              </div>
              <p className={iS.bdescription}>
                Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>

            <div className={iS.blogpost}>
              <h3 className={iS.blogtitle}>Creating pixel perfect icons in Figma</h3>
              <div className={iS.key}>
                <span className={iS.data}>05 May 2021</span>
                <span className={iS.topic}>Figma, Design</span>
              </div>
              <p className={iS.bdescription}>
                Amet minim mollit non deserunt ullamco est sit aliqua
                dolor do amet sint. Velit officia consequat duis enim
                velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage