import React from "react"
import Layout from "../../components/layout"
import * as pS from "../../styles/pages/project.module.css"

import workImgOne from "../../img/work-img1.png"
import workImgTwo from "../../img/work-img2.png"
import workImgThree from "../../img/work-img3.png"
import workImgFour from "../../img/work-img4.png"
import iHTML from "../../img/works-icons/html.svg"
import iCSS from "../../img/works-icons/css.svg"
import iJS from "../../img/works-icons/javascript.svg"
import iReact from "../../img/works-icons/react.svg"
import iNode from "../../img/works-icons/node-js.svg"
import iSass from "../../img/works-icons/sass.svg"
import iGatsby from "../../img/works-icons/gatsby.svg"
import iExpress from "../../img/works-icons/express.svg"
import iMongoDB from "../../img/works-icons/mongodb.svg"
import iGraphQL from "../../img/works-icons/graphql.svg"
import iWebpack from "../../img/works-icons/webpack.svg"
import iFigma from "../../img/works-icons/figma.svg"

import { Link } from "gatsby"
import Head from "../../components/head"

const ProjectsPage = () => {
    return (
        <Layout>
            <Head title="Works" />
            <div className={pS.container}>
                <h2 className={pS.h2}>Works</h2>
                <div className={pS.using}>
                    <div className={pS.mainStack}>
                        <h3 className={pS.h3}>Main Stack That I use</h3>
                        <ul className={pS.iconsList}>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iHTML} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>HTML5</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iCSS} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>CSS3</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iJS} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>JavaScript</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iReact} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>React</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iNode} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>Node.js</span>
                            </li>
                        </ul>
                    </div>
                    <div className={pS.adStack}>
                        <h3 className={pS.h3}>Also I know how to work with</h3>
                        <ul className={pS.iconsList}>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iSass} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>Sass</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iGatsby} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>Gatsby</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iExpress} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>Express</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iMongoDB} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>MongoDB</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iGraphQL} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>GraphQL</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iWebpack} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>Webpack</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img className={pS.icon} src={iFigma} alt="Icon"></img>
                                </div>
                                <span className={pS.tooltiptext}>Figma</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className={pS.list}>
                    <li className={pS.item}>
                        <div>
                            <img className={pS.img} src={workImgOne} alt="Work"></img>
                        </div>
                        <div className={pS.wrapper}>
                            <h3 className={pS.title}>
                                <Link className={pS.link} to="/projects/dashboard">
                                    Designing Dashboards
                                </Link>
                            </h3>
                            <div className={pS.key}>
                                <span className={pS.data}>2021 Mar</span>
                                <span className={pS.topic}>Dashboard</span>
                            </div>
                            <p className={pS.text}>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam c onsequat sunt nostrud amet.
                            </p>
                        </div>
                    </li>

                    <li className={pS.item}>
                        <div>
                            <img className={pS.img} src={workImgTwo} alt="Work"></img>
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
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam c onsequat sunt nostrud amet.
                            </p>
                        </div>
                    </li>

                    <li className={pS.item}>
                        <div>
                            <img className={pS.img} src={workImgThree} alt="Work"></img>
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
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam c onsequat sunt nostrud amet.
                            </p>
                        </div>
                    </li>

                    <li className={pS.item}>
                        <div>
                            <img className={pS.img} src={workImgFour} alt="Work"></img>
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
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                                sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam c onsequat sunt nostrud amet.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </Layout>
    )
}

export default ProjectsPage
