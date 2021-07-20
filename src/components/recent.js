import React from 'react'
import * as rS from '../styles/recent.module.css'
import { graphql, Link, useStaticQuery } from 'gatsby'

const Recent = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title 
                            date
                            topic
                            description
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <div className={rS.recent}>
            <div className={rS.wrapper}>
                <h2 className={rS.h2}>
                    <Link className={rS.link} to='/blog' >
                        Recent Posts
                    </Link>
                </h2>
                <ul className={rS.list}>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                                <li className={rS.post}>
                                    <h3 className={rS.title}>
                                        <Link className={rS.link} to='/'>Making a desing system from scratch</Link>
                                    </h3>
        
                                    <div className={rS.key}>
                                        <span className={rS.data}>12 Jul 2021</span>
                                        <span>Design, Pattern</span>
                                    </div>
        
                                    <p className={rS.description}>
                                        Amet minim mollit non deserunt ullamco est sit aliqua
                                        dolor do amet sint. Velit officia consequat durS enim
                                        velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </p>
                                </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Recent