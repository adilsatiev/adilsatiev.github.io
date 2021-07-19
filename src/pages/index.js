import React from 'react'
import Typical from 'react-typical'
import introPhoto from '../img/intro-photo.png'
import * as iS from '../styles/index.module.css'
import Layout from '../components/layout'
import Works from '../components/works'
import Recent from '../components/recent'
import { graphql, useStaticQuery } from 'gatsby'


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={iS.wrapper}>

        <div className={iS.main}>
          <div className={iS.box}>
            <h1 className={iS.header}>
              {data.site.siteMetadata.title}
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
              I'm Adil Satiev. From Kazan, Russia. I'm web developer.
              On this site you could read my blog or check my works.
              If you want to check my CV, so download button is below!
              Want to look over my social media accounts? Links at the bottom of the site.
            </p>
            <button className={iS.button}> Download Resume</button>
          </div>

          <div>
            <img className={iS.photo} src={introPhoto} alt='introPhoto'></img>
          </div>
        </div>

      </div>

      <Recent />

      <Works />

    </Layout>
  )
}

export default IndexPage