import React from "react"
import * as wS from "../styles/components/works.module.css"
import workImgOne from "../img/work-img1.png"
import workImgTwo from "../img/work-img2.png"
import workImgThree from "../img/work-img3.png"
import { Link } from "gatsby"

const Works = () => {
  return (
    <div className={wS.container}>
      <h2 className={wS.h2}>Featured works</h2>

      <ul>
        <li className={wS.item}>
          <div>
            <img className={wS.img} src={workImgOne} alt="Work"></img>
          </div>
          <div className={wS.wrapper}>
            <h3 className={wS.title}>
              <Link className={wS.link} to="/">
                Designing Dashboards
              </Link>
            </h3>
            <div className={wS.key}>
              <span className={wS.data}>2021 Mar</span>
              <span className={wS.topic}>Dashboard</span>
            </div>
            <p className={wS.text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam c onsequat sunt nostrud amet.
            </p>
          </div>
        </li>

        <li className={wS.item}>
          <div>
            <img className={wS.img} src={workImgTwo} alt="Work"></img>
          </div>
          <div className={wS.wrapper}>
            <h3 className={wS.title}>
              <Link className={wS.link} to="/">
                Vibrant Portraits of 2020
              </Link>
            </h3>
            <div className={wS.key}>
              <span className={wS.data}>2021 May</span>
              <span className={wS.topic}>Illustration</span>
            </div>
            <p className={wS.text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam c onsequat sunt nostrud amet.
            </p>
          </div>
        </li>

        <li className={wS.item}>
          <div>
            <img className={wS.img} src={workImgThree} alt="Work"></img>
          </div>
          <div className={wS.wrapper}>
            <h3 className={wS.title}>
              <Link className={wS.link} to="/">
                36 Days of Malayalam type
              </Link>
            </h3>
            <div className={wS.key}>
              <span className={wS.data}>2021 Jan</span>
              <span className={wS.topic}>Typography</span>
            </div>
            <p className={wS.text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam c onsequat sunt nostrud amet.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Works
