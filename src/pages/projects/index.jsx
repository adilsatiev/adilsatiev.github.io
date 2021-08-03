import React from "react"
import Layout from "../../components/layout"
import Head from "../../components/head"
import ListItem from "./component/listitem"
import * as pS from "../../styles/pages/project.module.css"

import workImgOne from "../../img/nodesamples.jpg"
import workImgTwo from "../../img/csssamples.png"
import workImgThree from "../../img/work-img4.png"

import pixel from "../../img/pixel.png"

const ProjectsPage = () => {
    return (
        <Layout>
            <Head title="Works" />
            <div className={pS.container}>
                <h2 className={pS.h2}>Works</h2>
                
                <div className={pS.iconsList}>
                    <div className={pS.firstStack}>
                        <h3 className={pS.h3}>Main stack that I use</h3>
                        <ul className={pS.iconsList}>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.ihtml}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>HTML5</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.icss}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>CSS3</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.ijs}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>JavaScript</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.ireact}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>React</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.inode}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>Node.js</span>
                            </li>
                        </ul>
                    </div>
                    <div className={pS.secondStack}>
                        <h3 className={pS.h3}>Also I'm familiar with</h3>
                        <ul className={pS.iconsList}>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.isass}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>Sass</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.igatsby}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>Gatsby</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.iexpress}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>Express</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.imongo}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>MongoDB</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.igraph}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>GraphQL</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.iwebpack}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>Webpack</span>
                            </li>
                            <li className={pS.iconWrapper}>
                                <div className={pS.iconsItem}>
                                    <img
                                        className={`${pS.icon} ${pS.ifigma}`}
                                        src={pixel}
                                        alt="Icon"
                                    ></img>
                                </div>
                                <span className={pS.tooltiptext}>Figma</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <ul className={pS.list}>
                    <ListItem
                        title="Task Manager Application"
                        data="2021 Aug"
                        topic="Development"
                        description="Task manager created with node.js & express"
                        imagesrc={workImgThree}
                        link="/projects/taskapp"
                    />
                    <ListItem
                        title="Node.js Code Samples"
                        data="2021 Jul"
                        topic="Backend"
                        description="2 small applications powered by NodeJS and npm packages"
                        imagesrc={workImgOne}
                        link="/projects/nodeapps"
                    />
                    <ListItem
                        title="CSS Projects"
                        data="2021 Feb"
                        topic="CSS"
                        description="Small CSS projects. Projects avaiable on codepen.io/adilsatiev"
                        imagesrc={workImgTwo}
                        link="/projects/cssapps"
                    />
                </ul>
            </div>
        </Layout>
    )
}

export default ProjectsPage
