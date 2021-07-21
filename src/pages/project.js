import React from "react"
import Layout from "../components/layout"
import * as pS from "../styles/project.module.css"

import workImgOne from "../img/work-img1.png"
import workImgTwo from "../img/work-img2.png"
import workImgThree from "../img/work-img3.png"
import workImgFour from "../img/work-img4.png"

import { Link } from "gatsby"
import Head from "../components/head"

const ProjectPage = () => {
  return (
    <Layout>
      <Head title="Works" />
      <div className={pS.container}>
        <h2 className={pS.h2}>Works</h2>
        <ul className={pS.list}>
          <li className={pS.item}>
            <div>
              <img src={workImgOne} alt="Work"></img>
            </div>
            <div className={pS.wrapper}>
              <h3 className={pS.title}>
                <Link className={pS.link} to="/">
                  Designing Dashboards
                </Link>
              </h3>
              <div className={pS.key}>
                <span className={pS.data}>2021 Mar</span>
                <span className={pS.topic}>Dashboard</span>
              </div>
              <p className={pS.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam c onsequat sunt nostrud amet.
              </p>
            </div>
          </li>

          <li className={pS.item}>
            <div>
              <img src={workImgTwo} alt="Work"></img>
            </div>
            <div className={pS.wrapper}>
              <h3 className={pS.title}>
                <Link className={pS.link} to="/">
                  Vibrant Portraits of 2020
                </Link>
              </h3>
              <div className={pS.key}>
                <span className={pS.data}>2021 May</span>
                <span className={pS.topic}>Illustration</span>
              </div>
              <p className={pS.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam c onsequat sunt nostrud amet.
              </p>
            </div>
          </li>

          <li className={pS.item}>
            <div>
              <img src={workImgThree} alt="Work"></img>
            </div>
            <div className={pS.wrapper}>
              <h3 className={pS.title}>
                <Link className={pS.link} to="/">
                  36 Days of Malayalam type
                </Link>
              </h3>
              <div className={pS.key}>
                <span className={pS.data}>2021 Jan</span>
                <span className={pS.topic}>Typography</span>
              </div>
              <p className={pS.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam c onsequat sunt nostrud amet.
              </p>
            </div>
          </li>

          <li className={pS.item}>
            <div>
              <img src={workImgFour} alt="Work"></img>
            </div>
            <div className={pS.wrapper}>
              <h3 className={pS.title}>
                <Link className={pS.link} to="/">
                  Components
                </Link>
              </h3>
              <div className={pS.key}>
                <span className={pS.data}>2021 Feb</span>
                <span className={pS.topic}>Components</span>
              </div>
              <p className={pS.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam c onsequat sunt nostrud amet.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default ProjectPage
