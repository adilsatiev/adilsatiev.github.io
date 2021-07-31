import React from "react"
import Layout from "../../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import Head from "../../components/head"

import * as pS from "../../styles/pages/project.module.css"

import workImgOne from "../../img/work-img1.png"
import workImgTwo from "../../img/work-img2.png"
import workImgThree from "../../img/work-img3.png"
import workImgFour from "../../img/work-img4.png"
import pixel from "../../img/pixel.png"

const ProjectsPage = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         w_title
    //                         w_date
    //                         w_topic
    //                         w_description
    //                     }
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)

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
                    {/* {data.allMarkdownRemark.edges.map(edge => {
                        return (
                            <li className={pS.item}>
                                <div>
                                    <img className={pS.img} src={edge.node.frontmatter.image} alt="Work"></img>
                                </div>
                                <div className={pS.wrapper}>
                                    <h3 className={pS.title}>
                                        <Link className={pS.link} to="/projects/dashboard" to={`/projects/${edge.node.fields.slug}`}>
                                            {edge.node.frontmatter.title}
                                        </Link>
                                    </h3>


                                    <div className={pS.key}>
                                        <span className={pS.data}>{edge.node.frontmatter.date}</span>
                                        <span className={pS.topic}>{edge.node.frontmatter.topic}</span>
                                    </div>
                                    <p className={pS.text}>
                                        {edge.node.frontmatter.description}
                                    </p>
                                </div>
                            </li>
                        )
                    })} */}

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
                                <Link className={pS.link} to="/projects/nodeapps">
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
