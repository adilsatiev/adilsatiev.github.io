import React from 'react'
import Typical from 'react-typical'
import introPhoto from '../img/intro-photo.png'
import * as iS from '../styles/index.module.css'
import Layout from '../components/layout'
import Works from '../components/works'
import Recent from '../components/recent'



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

      <Recent/>

      <Works/>

    </Layout>
  )
}

export default IndexPage