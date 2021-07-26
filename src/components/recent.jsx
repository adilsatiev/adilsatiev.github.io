import React from "react"
import * as rS from "../styles/components/recent.module.css"
import { graphql, Link, useStaticQuery } from "gatsby"

const Recent = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
                    <Link className={rS.link} to="/blog">
                        Recent Posts
                    </Link>
                </h2>
                <ul className={rS.list}>
                    {data.allMarkdownRemark.edges.slice(0, 2).map(edge => {
                        return (
                            <li className={rS.post}>
                                <h3 className={rS.title}>
                                    <Link className={rS.link} to={`/blog/${edge.node.fields.slug}`}>
                                        {edge.node.frontmatter.title}
                                    </Link>
                                </h3>

                                <div className={rS.key}>
                                    <span className={rS.data}>{edge.node.frontmatter.date}</span>
                                    <span>{edge.node.frontmatter.topic}</span>
                                </div>

                                <p className={rS.description}>
                                    {edge.node.frontmatter.description}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Recent
