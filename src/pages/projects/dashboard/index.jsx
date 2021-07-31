import React from "react"
import Layout from "../../../components/layout"
import * as dS from "./dashboard.module.css"
import prjImgOne from "../../../img/prj-img1.png"
import prjImgTwo from "../../../img/prj-img2.png"

export default function Dashboard() {
    return (
        <Layout>
            <div className={dS.container}>
                <h3 className={dS.title}>Designing Dashboards with usability in minds</h3>
                <div className={dS.key}>
                    <span className={dS.data}>2021 Mar</span>
                    <span className={dS.topic}>Dashboard</span>
                </div>
                <p className={dS.text}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation veniam c onsequat sunt
                    nostrud amet.
                </p>
                <div className={dS.imgWrapper}>
                    <img src={prjImgOne} alt="ProjectImg"></img>
                </div>
                <h3>Heading 3</h3>
                <h4 className={dS.headerFour}>Heading 4</h4>
                <div className={dS.imgWrapper}>
                    <img src={prjImgTwo} alt="ProjectImg"></img>
                </div>
            </div>
        </Layout>
    )
}
